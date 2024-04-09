import { SidebarComponent } from "./SidebarComponent";
import { ArticleComponent } from "./ArticleComponent";
import "./articlesData.js";
import { articlesList } from "./articlesData.js";
import { useState } from "react";

const MainContent = {
    leftTitle: "Recent Articles",
    rightTitle: "About page",
    insideText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor velit non libero tincidunt placerat. Quisque eu lorem sed risus posuere aliquam iaculis a nisl. Fusce mollis pretium pretium. Quisque orci mi, posuere eu vehicula sed, aliquet eget nunc. In tincidunt ante eu orci fermentum condimentum. Nullam sit amet accumsan quam. Nulla nunc mauris, luctus et mattis id, sagittis at erat. Praesent venenatis malesuada libero quis efficitur. Suspendisse in euismod leo, vel pulvinar arcu. Aliquam fringilla eros vel nibh tincidunt rhoncus. Aliquam consectetur elit ut efficitur imperdiet. Cras scelerisque a risus a aliquet. In hac habitasse platea dictumst. Aenean at dapibus lacus. Suspendisse eget dolor sapien."
}

function MainComponent() {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <div className="main">
            <SidebarComponent articles={articlesList} page={currentPage} changePage={setCurrentPage}/>
            <ArticleComponent articles={articlesList} page={currentPage} changePage={setCurrentPage}/>
        </div>
    )
}

export default MainComponent;

