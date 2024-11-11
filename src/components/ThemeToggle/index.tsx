import Icons from '../../assets'

const ThemeToggle = () => {
  return (
    <div className='flex items-center gap-x-[16px] '>
        <span className='text-[#4B6A9B] text-header4 font-[700]'>Dark</span>
        <button className='h-[20px] aspect-square'>

        <img src={Icons.moon} alt="color scheme icon" />
        </button>
      
    </div>
  )
}

export default ThemeToggle
