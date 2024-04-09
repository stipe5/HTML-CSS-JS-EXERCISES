import HeaderComponent from "../Day4/HeaderComponent";
import MainComponent from "../Day4/MainComponent";
import FooterComponent from "../Day4/FooterComponent";
import { StateExampleComponent } from "./StateExampleComponent";
import "./Day3Component.scss"
import "./articlesData.js"

const HeaderContent = {
    link1: "Home",
    link2: "About",
    link3: "Blog",
    link4: "Contact"
}

const MainContent = {
    leftTitle: "Recent Articles",
    rightTitle: "About page",
    insideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit non libero tincidunt placerat. Quisque eu lorem sed risus posuere aliquam iaculis a nisl. Fusce mollis pretium pretium. Quisque orci mi, posuere eu vehicula sed, aliquet eget nunc. In tincidunt ante eu orci fermentum condimentum. Nullam sit amet accumsan quam. Nulla nunc mauris, luctus et mattis id, sagittis at erat. Praesent venenatis malesuada libero quis efficitur. Suspendisse in euismod leo, vel pulvinar arcu. Aliquam fringilla eros vel nibh tincidunt rhoncus. Aliquam consectetur elit ut efficitur imperdiet. Cras scelerisque a risus a aliquet. In hac habitasse platea dictumst. Aenean at dapibus lacus. Suspendisse eget dolor sapien."
}

const FooterContent = {
    footerText: "Copyright 2024 - Data Privacy - Contact"
}

function Day4Component() {
    return (
        <div className="blog-container">
            <h3>Day 4 Component</h3>
            <StateExampleComponent/>
            <HeaderComponent header={HeaderContent}/>
            <MainComponent/>
            <FooterComponent footer={FooterContent}/>
        </div>
    )
}

export {Day4Component};