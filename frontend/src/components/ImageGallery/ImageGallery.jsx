import React from 'react'
import galleryImages from './ImageGalleriesImg'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

const ImageGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
        {
            galleryImages.map((item,index)=>
                (
                    <img src={item} 
                    className='gallery_img'
                    key={index} 
                    alt="" 
                    style={{width:"100%",display:'block',borderRadius:"10px"}} />
                )
            )
        }
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}

export default ImageGallery