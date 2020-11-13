import { LayoutBlog } from '../components/templates';
import { Container } from '../styles';
const Home = () => {
  return (
    <LayoutBlog>
      <main className="main">
			<div className="container">
				<section>
					<div>
						<img src="/" />
						<div>
				<h1>Francisco Hidalgo</h1>
				<p>Software developer</p>
				<p>Social Media</p>
						</div>
					</div>
				</section>
				<section>
					<article>
						<img src="/" />
						<div>
							<h3>Titulo de mi blog</h3>
				<p>Descripcion de mi blog</p>
						</div>
					</article>
				</section>
			</div>
      </main>
		</LayoutBlog>
  );
}
 export default Home;
