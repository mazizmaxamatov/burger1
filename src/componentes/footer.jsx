import { Fragment } from 'react'
import Todos from './todos'
import Posts from './posts'
import Comments from './comments'







function Footer() {

    return (
        <Fragment>
            <div className="max-w-[500px] mx-auto mt-[200px] mb-[100px] flex gap-[20px]">
                <Todos />
                <Posts />
                <Comments />
            </div>
        </Fragment>
    )
}

export default Footer


