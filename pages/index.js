import Link from "next/link";

export default function IndexPage({ posts }) {
  return (
    <div>
      <title>Home | Newstack.id</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
      <link href="http://fonts.cdnfonts.com/css/khwan-sans" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"></link>
      <style jsx>{`
        .mycontainer {
          padding-left: 60px;
          padding-right: 60px;
        }
      `}</style>
  <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-3 bg-white rounded">
    <div className="mycontainer">
      <a className="navbar-brand" href="/">
      <img src="/newstack.png" width="20%"/>
        &nbsp;
        <span style={{fontWeight: "600"}}>Newstack.id</span> 
        </a>
    </div>
  </nav>
  <div className="mycontainer mt-5">
    
    <div className="row">
      <div className="col-lg-8">

        <div className="headline ml-2">
          <p className="text-dark mmedium"> <span className="badge badge-dark">&nbsp;</span> SEMUA</p>
          <h3 className="mt-n3 pop-sb ml-3">Berita</h3>
        </div>

        {posts.map((post) => (
        <div className="card rounded-lg border-white bg-white" key={post.id}>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-5 mx-auto my-auto">
                <img src={"http://127.0.0.1:8000/storage/" + post.foto} className="w-100 rounded" style={{objectFit: "cover", height: "150px"}} alt="..." />
              </div>
              <div className="col-lg-7 mx-auto my-auto">
                <h6 className="text-dark mt-2 pop-reg">{post.kategori}</h6>
                <h6 className="font-weight-bold">{post.judul}
                </h6>
                <p className="penjelasan-berita"><Link href={`/post/${post.kategori}/${post.id}`}>Read more</Link></p>
                <div className="row mt-3 container">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 172 172" style={{fill: '#1f1f1f'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,172v-172h172v172z" fill="none" /><g fill="#000000"><path d="M86,18.14063c-37.35625,0 -67.85937,30.50313 -67.85937,67.85938c0,37.35625 30.50313,67.85938 67.85938,67.85938c37.35625,0 67.85938,-30.50312 67.85938,-67.85937c0,-37.35625 -30.50312,-67.85937 -67.85937,-67.85937zM86,26.20313c32.92188,0 59.79688,26.875 59.79688,59.79688c0,32.92188 -26.875,59.79688 -59.79687,59.79688c-32.92187,0 -59.79687,-26.875 -59.79687,-59.79687c0,-32.92187 26.875,-59.79687 59.79688,-59.79687zM86,41.65625c-2.28437,0 -4.03125,1.74687 -4.03125,4.03125v33.32605c-2.41875,1.34375 -4.03125,4.0302 -4.03125,6.98645c0,4.43438 3.62812,8.0625 8.0625,8.0625c2.95625,0 5.6427,-1.6125 6.98645,-4.03125h19.88855c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125h-19.88855c-0.67187,-1.20937 -1.74583,-2.28333 -2.9552,-2.9552v-33.32605c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125zM79.28125,115.5625c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h13.4375c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125z" /></g></g>
                  </svg>
                  <p style={{fontSize: '12px'}} className="text-dark ml-1 my-auto mr-3">{post.created_at}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      </div>

      <div className="col-lg-4 d-none d-md-block d-md-none">
        <div className="headline ml-2">
          <p className="text-dark mmedium"> <span className="badge badge-dark">&nbsp;</span> TOP</p>
          <h3 className="mt-n3 pop-sb ml-3">KATEGORI</h3>
        </div>
        <div className="related mt-3 d-none d-md-block d-md-none">
          <div className="row p-3">
            <div className="col-lg-4">
              <Link href={{ pathname: '/[kategori]',  query: { kategori: 'teknologi' },  }} >
                <button type="button" class="btn btn-outline-dark">Teknologi</button>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href={{ pathname: '/[kategori]',  query: { kategori: 'olahraga' },  }} >
                <button type="button" class="btn btn-outline-dark">Olahraga</button>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href={{ pathname: '/[kategori]',  query: { kategori: 'musik' },  }} >
                <button type="button" class="btn btn-outline-dark">Musik</button>
              </Link>
            </div>
          </div>
          <hr></hr>
          <div class="card mt-5">
            <div class="card-body text-center">
                <h5>Advertise Here</h5>
            </div>
        </div>
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

    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:8000/api/beritas"
  );
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  };
}
