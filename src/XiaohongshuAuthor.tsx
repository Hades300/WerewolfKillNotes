function XiaohongshuAuthor(
    {hash}: { hash: string } = {hash: "6512f3a6000000002401676b"}
) {
    let url = `https://www.xiaohongshu.com/user/profile/${hash}`
    return <section>
        <div>
            <a href={url} style={{
                display: "inline-block",
                padding: "0.25rem .5rem",
                borderRadius: ".3rem",
                background: "red",
                color: "white",
                fontWeight: "400",
                textDecoration: "none"
            }}>作者小红书🍠</a>
        </div>
    </section>
}


export default XiaohongshuAuthor;