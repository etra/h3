import SearchAppBar from "@h3/component/header";

export default function PageLayout({children}) {
    return (
        <SearchAppBar></SearchAppBar>
    // <div>{children}</div>
        // <>
        //     <SearchAppBar></SearchAppBar>
        //     {/* <div className="body"> */}
        //         {/* {children} */}
        //     {/* </div> */}
        // </>
    )
};

 
    
    // export const getLayout = page => <Layout>{page}</Layout>
    

       // import Footer from "../../component/footer"
    // import Header from "../../component/header"
    // import './IndexLayout.module.css'
    
    
    
    // function IndexLayout({ children }) {
    //     return (
    //         <div className="IndexLayout">
    //             <Header showCategories={true} staticSubjects={children.props.pageData?.header.subjects}></Header>
    //             <div className="body">
    //                 {children}
    //             </div>
    //             <Footer></Footer>
    //         </div>
    //     )
    // }
    // export default IndexLayout    