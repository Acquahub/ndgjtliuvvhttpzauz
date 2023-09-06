import React from 'react';
import Link from 'next/link';
import styles from './screen1.module.css';
import { Metadata } from "next";

import Image from 'next/image';


export const metadata: Metadata = {
                
}

function Screen1() {
    
    
    

    return(
        <div className={styles["Screen1"]}>
            
<div id="layer-1-cb83a9dab82f4294a6909b452b29824f" className={styles["layer-1-cb83a9dab82f4294a6909b452b29824f"]}    ></div>
<div id="layer-2-42f3ccfab3fb4b6788023b06a49241fe" className={styles["layer-2-42f3ccfab3fb4b6788023b06a49241fe"]}    >
<div id="layer-3-6e1960ee3e984f12b3ddc5c2014e787b" className={styles["layer-3-6e1960ee3e984f12b3ddc5c2014e787b"]}    >
<div className={styles["imageview-1-9c1894ce42bc495092e19ba6b4a16f02"]}  >
    <Image id="imageview-1-9c1894ce42bc495092e19ba6b4a16f02" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='https://i.ibb.co/5ndGgWv/image-43.png' />
</div>
</div>
</div>
        </div>
    );
}

export default Screen1;
            