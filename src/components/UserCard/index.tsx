import Icons from "../../assets";
import useUserStore from "../../store/useUserStore";
import convertToDate from "../util/convertToDate";

const UserCard = () => {
  const { user } = useUserStore();

  if (!user) {
    return null;
  }

  return (
    <div className="rounded-[15px] bg-white py-[32px] px-[24px] md:p-[40px] mt-[16px] md:max-w-[573px] lg:max-w-[730px] mx-auto">
      <div className="flex items-center justify-between gap-x-[19px] md:gap-x-[41px] w-[233px] h-[70px] md:w-full md:h-[117px]">
        <img
          src={user.avatar_url}
          alt=""
          className="h-[70px] md:h-[117px] aspect-square rounded-full bg-red-200"
        />
        <div className="flex flex-col lg:flex-row lg:items-start justify-between w-full h-full">
          <div>
            <h2 className="text-header3 md:text-header1 font-[700] capitalize">
              {user.name}
            </h2>
            <p className="text-header4 md:text-header3 text-[#0079FF]">
              @{user.login}
            </p>
          </div>
          <p className="text-header4 md:text-header3 text-[#697C9A] ">
            Joined {convertToDate(user.created_at)}
          </p>
        </div>
      </div>
      {/* end of head */}
      <p className="text-[#4B6A9B] text-header4 md:text-header3 mt-[33px] line-clamp-4">
        {user.bio}
      </p>
      <div className="flex rounded-[10px] items-center justify-between py-[18px] px-[15px]  bg-[#F6F8FF]  h-[85px] mt-[23px] w-full">
        <div className="flex flex-col gap-y-[8px] justify-center  items-center md:items-start ">
          <h3 className="text-[11px] md:text-header4 text-[#4B6A9B]">Repos</h3>
          <p className="text-header3 font-[700] md:text-[22px]">
            {user.public_repos}{" "}
          </p>
        </div>
        <div className="flex flex-col gap-y-[8px] justify-center  items-center md:items-start  ">
          <h3 className="text-[11px] md:text-header4 text-[#4B6A9B]">
            Followers
          </h3>
          <p className="text-header3 font-[700] md:text-[22px]">
            {user.followers}
          </p>
        </div>
        <div className="flex flex-col gap-y-[8px] justify-center items-center md:items-start ">
          <h3 className="text-[11px] md:text-header4 text-[#4B6A9B]">
            Following
          </h3>
          <p className="text-header3 font-[700] md:text-[22px]">
            {user.following}
          </p>
        </div>
      </div>
      <div className="flex flex-col h-[127px] mt-[24px] gap-y-[16px]">
        <div className="flex items-center gap-x-[20px]">
          <img
            src={Icons.location}
            alt="location icon"
            className="aspect-auto h-[20px]"
          />
          <p className="text-header4 md:text-header3 text-[#4B6A9B]">
            {user.location ? user.location : "Not Available"}
          </p>
        </div>
        <div className="flex items-center gap-x-[20px]">
          <img
            src={Icons.website}
            alt="location icon"
            className="aspect-auto h-[20px]"
          />
          <a
            href={user.url}
            className="text-header4 md:text-header3 text-[#4B6A9B] hover:underline cursor-pointer line-clamp-1"
          >
            {user.url}
          </a>
        </div>
        <div className="flex items-center gap-x-[20px]">
          <img
            src={Icons.twitter}
            alt="location icon"
            className="aspect-auto h-[20px]"
          />
          <p className="text-header4 md:text-header3 text-[#4B6A9B]">
            {user.twitter_username || "Not Available"}
          </p>
        </div>
        <div className="flex items-center gap-x-[20px]">
          <img
            src={Icons.company}
            alt="location icon"
            className="aspect-auto h-[20px]"
          />
          <p className="text-header4 md:text-header3 text-[#4B6A9B]">
            {" "}
            {user.company || "Not Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
