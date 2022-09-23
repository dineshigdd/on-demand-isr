import Link from 'next/link';
import styles from '../../styles/Home.module.css'

function ProductList( { products }){
    return( 
        <div className={ styles.main } >
            <h1>Our Products</h1>
            {
                products.map( 
                    product =><div className={ styles.card } key={ product.id }>
                        
                        <Link href= { `products/${product.id}`}>
                            <a>{ product.name }</a>
                        </Link></div>
                 
                 )
            }
        </div>
    )
}

export default ProductList
 
 
export async function getStaticProps(){

 const response = await fetch('https://62fc79a81e6a530698a7479c.mockapi.io/products');     
        const data = await response.json();
        
        return {
            props:{
                products: data,
            },
            
        }
}