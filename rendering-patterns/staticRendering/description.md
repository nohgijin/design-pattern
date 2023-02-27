## Static Rendering
- SSR은 TTFB에 안좋은 영향을 줌
- CSR은 FCP, LCP, TTI에 안좋은 영향을 줌
- Static rendering이나 Static generation은 사이트를 build할 때 html를 클라이언트에 제공하면서 위 단점 해결
- 소개페이지 등에 적합
### SSG with data (All Items)
- getStaticProps 함수를 통해 빌드 시 데이터를 가져오게 됨
```
// This function runs at build time on the build server
export async function getStaticProps() {
 return {
   props: {
     products: await getProductsFromDatabase()
   }
 }
}

// The page component receives products prop from getStaticProps at build time
export default function Products({ products }) {
 return (
   <>
     <h1>Products</h1>
     <ul>
       {products.map((product) => (
         <li key={product.id}>{product.name}</li>
       ))}
     </ul>
   </>
 )
}
```
### SSG with data (Individual Item)
- getStaticPaths 함수를 통해 build시간에 id에 접근 가능
```

// pages/products/[id].tsx

// In getStaticPaths(), you need to return the list of
// ids of product pages (/products/[id]) that you’d
// like to pre-render at build time. To do so,
// you can fetch all products from a database.
export async function getStaticPaths() {
 const products = await getProductsFromDatabase()

 const paths = products.map((product) => ({
   params: { id: product.id }
 }))

 // fallback: false means pages that don’t have the correct id will 404.
 return { paths, fallback: false }
}

// params will contain the id for each generated page.
export async function getStaticProps({ params }) {
 return {
   props: {
     product: await getProductFromDatabase(params.id)
   }
 }
}

export default function Product({ product }) {
 // Render product
}
```
### 고려사항
- 많은 HTML 파일
- CDN이나 edge caching할 경우 유리
- 동적 콘텐츠에 부적합