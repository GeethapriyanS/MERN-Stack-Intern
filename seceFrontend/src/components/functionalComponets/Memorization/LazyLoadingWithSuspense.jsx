import {lazy,Suspense} from "react";
const LazyComponent = lazy(()=> import ("../About"))
const LazyLoad = () => {
    return (
        <div>
            <Suspense fallback={<h1>Loading !!</h1>}>
               <h2>This is Lazy Component Example</h2>
               <LazyComponent />
            </Suspense>
        </div>
    )
}
export default LazyLoad;