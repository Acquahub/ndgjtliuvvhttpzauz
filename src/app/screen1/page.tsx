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
            
<div id="layer-2-13d5f2d4700e4b45a8e12b0f1392167b" className={styles["layer-2-13d5f2d4700e4b45a8e12b0f1392167b"]}    >
<div id="layer-3-bba831c8dae64efc9b9cc37eac40c767" className={styles["layer-3-bba831c8dae64efc9b9cc37eac40c767"]}    >
<div id="layer-5-fa07a1237dde4fa39f4093a43baf4b74" className={styles["layer-5-fa07a1237dde4fa39f4093a43baf4b74"]}    >
<div className={styles["imageview-1-ae5ba1f2ad1f40d3b1b08aaedb43c862"]}  >
    <Image id="imageview-1-ae5ba1f2ad1f40d3b1b08aaedb43c862" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} fill={true} alt="imageview-1" src='/assets/Santiago Black and White - Agua.png' />
</div>
</div>
</div>
<div id="layer-4-04cac525c1944687a7d16ddb0f5d7e0c" className={styles["layer-4-04cac525c1944687a7d16ddb0f5d7e0c"]}    >
<div id="layer-5-30af138dab0b4931b108c3a52e092b18" className={styles["layer-5-30af138dab0b4931b108c3a52e092b18"]}    ></div>
</div>
</div>
        </div>
    );
}

export default Screen1;
            