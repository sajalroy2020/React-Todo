import { blogPost } from '../../lib/Blog_data';

export default function BlogSlug({title, date, content}){
    return(
        <>
            <h1>{title}</h1>
            <h5>{date}</h5>
            <p>{content}</p>
        </>
    )
}



export async function getStaticProps(context) {
  const {params} = context;
    return {
      props: blogPost.find(item => item.slug === params.slug),
    }
}


export async function getStaticPaths() {
    return {
      paths: blogPost.map(item=>({
        params:{
            slug: item.slug,
        }
      })),
      fallback: false, 
    }
  }


  // const foo = {
  //   paths: blogPost.map(item=>({     [Chack the Object Data]
  //     params:{
  //         slug: item.slug,
  //     }
  //   })),
  //   fallback: false, 
  // }
  // console.log(JSON.stringify(foo, null, ' '));
  // return foo;