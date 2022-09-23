import styles from '../../styles/Home.module.css'

export default function Product( { product }){    
    console.log(data );
    return( 
        <div className={ styles.container }>           
            {                 
             <div className={ styles.main }>
                <h1 className={ styles.title }>{ product.name }</h1>
                <p className={ styles.card }>{ product.description}</p>
                <p className={ styles.card}>${ product.price }</p>
             </div>
                 
            }
        </div>
    )
}

export function getStaticPaths(){

        return {
            paths:[{ params:{ productId: '1' }  },],
            fallback:'blocking'
        }
 
}



export async function getStaticProps( context ){
     const { params } = context;
     const response =  await fetch(`https://62fc79a81e6a530698a7479c.mockapi.io/products/${params.productId }`);
     const data = await response.json();
    //  console.log(data );

    return {
        props:{ product: data, },
        revalidate:'false'
    }
}