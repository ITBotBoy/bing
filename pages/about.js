import {useRouter} from "next/router";
import '../styles/about.scss';


export async function getServerSideProps(context) {
    const {imgArr} = global;
    return {
        props: {
            img: imgArr[Math.floor(Math.random() * imgArr.length)],
        }
    }
}

export default function about({img = {}}) {
    const router = useRouter();

    return (
        <div className="about-page">
            <div className="about-content" style={{backgroundImage: `url(//cn.bing.com${img.url})`}}>
            </div>
            <div className="text-content">
                <h2>
                    <a href="/" className="iconfont icon-bing"/>
                    关于 <a href="/">必应壁纸</a>
                </h2>
                <p> 准备搭建一个浏览图片的网站自娱自乐，偶然看到 <a target="_blank" rel="external nofollow noopener noreferrer"
                                              href="https://bing.jsososo.com">https://bing.jsososo.com </a> 这个网站设计的挺好的，就clone下来自己搭建了一个站点
                </p>
                <p> 开源项目链接 <a rel="external nofollow noopener noreferrer" target="_blank" href="https://github.com/jsososo/Bing">https://github.com/jsososo/Bing</a>
                </p>
                <p>快捷键目前有方向键（上/下一张图片）和空格键（随机一张图片）</p>
                <p>
                    <div></div>
                </p>
            </div>
        </div>
    )
}
