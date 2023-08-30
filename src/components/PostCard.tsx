
type PostCardProps = {
    id: number,
    title: string,
    body: string,
}
const PostCard = ({id,title,body}: PostCardProps) => {
  return (
    <div className="p-4 bg-white flex flex-col shadow-md text-slate-900 rounded-md">
        <h4 className="text-xl font-medium">{id}: {title}</h4>
        <p className="text-base">{body}</p>
    </div>
  )
}

export default PostCard