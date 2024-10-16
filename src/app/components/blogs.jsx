import Image from 'next/image';
import blogImage1 from "../assets/blogImage 1.png"
import blogImage2 from "../assets/blogImage 2.png"
import blogImage3 from "../assets/blogImage 3.png"
import styles from '../page.module.css'


export default function BlogSection () {
  const blogPosts = [
    {
      id: 1,
      title: 'Wyslac: Changing the landscape of cross-border money transfer',
      date: 'September 1, 2024',
      author: 'Idan Okoroabianje',
      image: {blogImage1},
    },
    {
      id: 2,
      title: '7 Tips for Sending Money Across Borders Safely and Securely with Wyslac',
      date: 'September 1, 2024',
      author: 'Idan Okoroabianje',
      image: {blogImage2},
    },
    {
      id: 3,
      title: 'The Benefits of Using Wyslac Services for International Money Transfers',
      date: 'September 1, 2024',
      author: 'Idan Okoroabianje',
      image: {blogImage3},
    },
  ];

  console.log(blogPosts.image)

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogSectionHeader}>Useful to Read</div>
      <div className={styles.blogContainer}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.blogCard}>
            <Image
              src={post.image}
              alt={post.title}
            />
            <div className={styles.blogInfo}>
              <div className={styles.blogInfoStats}>
                <div className={styles.blogInfoAuthor}>{post.author}</div>
                <div className={styles.blogInfoDate}>{post.date}</div>
              </div>
              <div className={styles.blogInfoTitle}>{post.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
