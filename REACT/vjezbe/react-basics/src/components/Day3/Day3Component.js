import "./Day3Component.scss"
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";

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

function Day3Component () {
    return(
        <div className="blog-container">
            <HeaderComponent header={HeaderContent} />
            <MainComponent main={MainContent} />
            <FooterComponent footer={FooterContent}/>
        </div>
    )
}

function Day3ParamsComponent () {
    return (<h2>Some params</h2>)
}

export {Day3Component, Day3ParamsComponent};