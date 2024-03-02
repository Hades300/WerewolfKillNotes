function MailAuthor(
    {mail}: { mail: string } = {mail: "dovexiaoxiami@163.com"}
) {
    let url = `mailto:${mail}`
    return <section>
        <div>
            <a href={url} style={{
                display: "inline-block",
                padding: "0.25rem .5rem",
                borderRadius: ".3rem",
                background: "black",
                color: "white",
                fontWeight: "400",
                textDecoration: "none"
            }}>作者邮箱📮</a>
        </div>
    </section>
}


export default MailAuthor;