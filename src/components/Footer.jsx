import styles from "../styles/Footer.module.css";

const Footer = () => (
	<div className={styles.footer}>
		<div>Made with 💝 with React ⚛️ by </div>
		<div>
			{" "}
			&copy;{" "}
			<a href="https://github.com/SHIVAM123P" target="_blank" rel="noreferrer">
				Shivam Kumar
			</a>
		</div>
	</div>
);

export default Footer;
