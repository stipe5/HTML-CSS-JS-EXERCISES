import { HugoComponent } from './HugoComponent'
import { HeaderComponent } from '../Day3/HeaderComponent'
import { MainComponent } from '../Day3/MainComponent'
import { FooterComponent } from '../Day3/FooterComponent'
import { articlesList } from './articlesData';
import { SidebarComponent } from '../Day3/SidebarComponent'
import { ArticleComponent } from '../Day3/ArticleComponent'


const menuItems = ["About", "Home", "Blog", "content"];


function BlogComponent(){
  // START BUSINESS LOGIC


  // END BUSINESS LOGIC
  return(
    <div className={'day4-component'}>
      <h3 style={{textAlign: 'center'}}>Blog Component (Day 4)</h3>
      {/*<HugoComponent />*/}
      <HeaderComponent menuItems={menuItems} />
      <MainComponent articles={articlesList} showButton={true} />
      <FooterComponent />
    </div>
  )
}

export { BlogComponent }
