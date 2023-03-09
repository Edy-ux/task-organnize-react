
import PageHeaderView from "./PageHeaderView";

const PageHeader = ({ title, actionButton }) => {
    const documentTitle = `Task Organizze`
    document.title = `${documentTitle} - ${title}`

    return <PageHeaderView  {...{ title, actionButton }} />
}

export default PageHeader