// DetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css'

const teamMembers = {
  2021: [
    {
      id: 1,
      image:"/images/alexia.jpg",
      name: 'Alice Johnson',
      age: 24,
      major: 'English Literature',
      biography:
        'Alice Johnson is a passionate literature enthusiast who graduated in 2021. She specializes in English Literature and has a keen interest in classic and modern works. During her studies, she focused on creative writing and literary analysis. Alice believes in the power of words to inspire and transform lives.',
    },
    {
      id: 2,
      name: 'Carlos Rodriguez',
      image:"/images/asher.jpeg",
      age: 23,
      major: 'Spanish Translation',
      biography:
        'Carlos Rodriguez completed his studies in Spanish Translation in 2022. Fluent in both English and Spanish, Carlos is dedicated to bridging linguistic and cultural gaps through his translation work. He is particularly interested in literary translation and has a deep appreciation for the nuances of language.',
    },
    {
      id: 3,
      name: 'Emily Davis',
      image:"/images/lilia.jpeg",
      age: 22,
      major: 'French Literature',
      biography:
        'Emily Davis is a graduate in 2021 with a focus on French Literature. Her passion for the French language extends to exploring the intricacies of French literary masterpieces. Emily is an advocate for cross-cultural communication and believes in the power of translation to bridge gaps between communities.',
    },
    {
      id: 4,
      name: 'Javier Morales',
      image:"/images/alexia.jpg",
      age: 25,
      major: 'German Linguistics',
      biography:
        'Javier Morales, a 2021 graduate, is an expert in German Linguistics. His academic journey involved delving deep into the structure and evolution of the German language. Javier is fascinated by the cultural nuances embedded in linguistic expressions and aims to contribute to the field of language preservation.',
    },
    {
      id: 5,
      name: 'Aiko Yamamoto',
      image:"/images/asher.jpeg",
      age: 23,
      major: 'Japanese Translation',
      biography:
        'Aiko Yamamoto, graduating in 2021, specializes in Japanese Translation. Fluent in both Japanese and English, Aiko is passionate about preserving the nuances of Japanese literature through translation. Aiko believes in the power of storytelling to foster cross-cultural understanding.',
    },
    {
      id: 6,
      name: 'Isabella Rossi',
      image:"/images/lilia.jpeg",
      age: 24,
      major: 'Italian Literature',
      biography:
        'Isabella Rossi, a 2021 graduate, immersed herself in the world of Italian Literature. Her studies focused on the rich literary traditions of Italy, exploring both classical and contemporary works. Isabella is dedicated to promoting the beauty of the Italian language through translation and creative expression.',
    },
    {
      id: 7,
      name: 'Chinonso Okafor',
      image:"/images/john.jpeg",
      age: 22,
      major: 'Nigerian Literature',
      biography:
        "Chinonso Okafor graduated in 2021 with a focus on Nigerian Literature. Passionate about promoting African literary heritage, Chinonso's studies included the exploration of Nigerian languages and their representation in literature.Chinonso is an advocate for diverse storytelling and cultural representation.",
    },
    {
      id: 8,
      name: 'Elena Fernandez',
      image:"/images/person.png",
      age: 23,
      major: 'Russian Translation',
      biography:
        "Elena Fernandez, a 2021 graduate, excels in Russian Translation. Elena's linguistic skills extend to the complexities of the Russian language, and she is dedicated to fostering understanding between Russian and non- Russian speakers through translation.Elena's passion lies in literary exploration and cultural exchange.",
    },
    {
      id: 9,
      name: 'Omar Ahmed',
      image:"/images/person.png",
      age: 24,
      major: 'Arabic Linguistics',
      biography:
        "Omar Ahmed, graduating in 2021, is an expert in Arabic Linguistics. Omar's academic journey involved in-depth analysis of the Arabic language's structure and historical evolution. He is committed to preserving the linguistic and cultural heritage embedded in the Arabic language through scholarly research.",
    },
    {
      id: 10,
      name: 'Sophie Dubois',
      image:"/images/person.png",
      age: 22,
      major: 'Spanish Literature',
      biography:
        "Sophie Dubois, a 2021 graduate, specializes in Spanish Literature. Sophie's studies encompass both classical and contemporary works, and she is particularly interested in the intersection of language and culture.Sophie aims to contribute to the appreciation of Spanish literary traditions.",
    },
    {
      id: 11,
      name: 'Ravi Patel',
      image:"/images/person.png",
      age: 23,
      major: 'Hindi Translation',
      biography:
        "Ravi Patel, a 2021 graduate, is skilled in Hindi Translation. Ravi's expertise lies in bridging linguistic gaps between Hindi and other languages.Passionate about the cultural richness of Hindi literature, Ravi aims to promote cross - cultural understanding through translation and storytelling.",
    },
    {
      id: 12,
      name: 'Anastasia Ivanova',
      image:"/images/person.png",
      age: 25,
      major: 'Russian Literature',
      biography:
        "Anastasia Ivanova, a 2021 graduate, delves into the world of Russian Literature. Anastasia's studies explore the depth and breadth of Russian literary traditions, and she is committed to sharing the beauty of the Russian language through translation and creative expression.",
},

  ],
  2022: [
    {
      id: 1,
      name: 'Carlos Rodriguez',
      image:"/images/person.png",
      age: 23,
      major: 'Spanish Translation',
      biography:
        'Carlos Rodriguez completed his studies in Spanish Translation in 2022. Fluent in both English and Spanish, Carlos is dedicated to bridging linguistic and cultural gaps through his translation work. He is particularly interested in literary translation and has a deep appreciation for the nuances of language.',
    },
 
  ],
  2023: [
    {
      id: 1,
      name: 'Mai Nguyen',
      image:"/images/person.png",
      age: 25,
      major: 'French Literature',
      biography:
        'Mai Nguyen, a 2023 graduate, has a strong background in French Literature. Her journey involves exploring the richness of French literary traditions. Mai is not only skilled in translation but also has a flair for creative writing. She believes in the power of language to connect diverse cultures.',
    },
    
  ],
  2024: [
    {
      id: 1,
      name: 'Hiroshi Tanaka',
      image:"/images/person.png",
      age: 22,
      major: 'Japanese Linguistics',
      biography:
        'Hiroshi Tanaka, a recent graduate in 2024, is an expert in Japanese Linguistics. He delves deep into the structure and beauty of the Japanese language. Hiroshi is passionate about preserving and promoting the cultural heritage embedded in the Japanese written word. His studies also extend to creative writing in Japanese literature.',
    },
  
  ],
 
};

const DetailsPage = () => {
  const { year } = useParams();
  const members = teamMembers[year];

  if (!members) {
    return <div>No team members found for the selected year</div>;
  }

  return (
    <div className='container'>
      <h2>Team of {year}</h2>
      <div className="card-container">
        {members.map((member) => (
          <div key={member.id} className="card">
            <div className="card-inner">
              <div className="card-front">
               
                <img src={member.image} alt={member.name} />
     
                <h3>{member.name}</h3>
              </div>
              <div className="card-back">
                <p className="info">Age: {member.age}</p>
                <p className="info">Major: {member.major}</p>
                <p className="info">Biography: {member.biography}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default DetailsPage;
