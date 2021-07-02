import Link from "next/link";

export default function PostPage({ post, kategori }) {
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
        <style jsx>{`
        .mycontainer {
          padding-left: 60px;
          padding-right: 60px;
        }
      `}</style>
  <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-3 bg-white rounded">
    <div className="mycontainer">
      <a className="navbar-brand" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
        &nbsp;
        &nbsp;
      <img src="/newstack.png" width="20%"/>
        &nbsp;
        <span style={{fontWeight: "600"}}>Newstack.id</span> 
        </a>
    </div>
  </nav>
  <div className="mycontainer">
    <div className="row">
    <div className="col-lg-2 mt-4">
        <div className="related d-none d-md-block d-md-none">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5>Advertise Here</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="container">
          <div className="berita mt-5">
            <div className="col-lg-12">
              <h2 className="font-weight-bold">{post.judul}</h2>
              <h5>{post.created_at}</h5>
              <br />
              <img src={"http://127.0.0.1:8000/storage/" + post.foto} className="img-fluid" style={{width: '90%'}} alt="" />
              <br />
              <div className="col-lg-11">
                <p className="isi mt-4">
                <div dangerouslySetInnerHTML={{ __html: post.konten }}></div>
                </p>
              </div>
            </div>
          </div>
          <div className="rekomendasi mt-5">
            <div className="col-lg-11">
              <h3>Recommended News</h3>
              <hr />
              <div className="card text-center">
                <div className="card-body">
                  <div className="row">
                    {kategori.map((k) => (
                      <div className="col">
                        <img src={"http://127.0.0.1:8000/storage/" + k.foto} className="img-thumbnail w-100" style={{objectFit: "cover", height: "200px"}} alt="" />
                        <Link href={`/post/${k.kategori}/${k.id}`}>{k.judul}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>       
          </div>
        </div>
      </div>
      <div className="col-lg-1 mt-5">
      </div>
    </div>
  </div>
  <div className="footer container mt-5">
      <div className="row justify-content-center mt-3 mb-4 text-center" style={{fontSize: '.875em'}}>
        Copyright © Newstack.id <br></br>
        Made with ❤ by Rohsyam Sidik
      </div>
    </div>
    </div>
  );
}

// export async function getServerSidePaths() {
//   const res = await fetch("http://localhost:8000/api/beritas");
//   const posts = await res.json();

//   const paths = posts.map((post) => ({
//     params: { id: post.id }
//   }));

//   return { paths, fallback: false };
// }

// export async function getServerSideProps({ params }) {
//   const res = await fetch(
//     "http://localhost:8000/api/berita/" + params.id
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data
//     }
//   };
// }

export async function getServerSideProps({ params }) {
  const [mainRes, kategoriRes] = await Promise.all([
    fetch("http://localhost:8000/api/berita/" + params.id), 
    fetch("http://localhost:8000/api/berita/kategori/" + params.kategori + "/4")
  ]);
  const [post, kategori] = await Promise.all([
    mainRes.json(), 
    kategoriRes.json()
  ]);
  return { 
    props: { post, kategori } };
}