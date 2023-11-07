import http from '../utils/request'
export const selectArticle = (way,theme,pageNum,pageSize,articleTitle) =>{
    return http.get('http://localhost:9001/article/selectHomeView',{params:
            {
                way:way,
                theme:theme,
                pageNum:pageNum,
                pageSize:pageSize,
                articleTitle:articleTitle
            }
    })
}
export const selectCarousel = () =>{
    return http.get('http://localhost:9001/carousel/selectCarousel')
}
