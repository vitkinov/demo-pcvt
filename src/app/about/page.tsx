import Image from 'next/image';
import teamDataRaw from '@/data/team-members.json';

type SocialLinks = { [key: string]: string };

interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  initials: string;
  color?: string;
  avatar?: string;
  socialLinks?: SocialLinks;
}

const teamData = teamDataRaw as {
  boardOfDirectors: TeamMember[];
  regularMembers: TeamMember[];
};

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="text-center">
      <div className={`w-24 h-24 bg-${member.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden`}>
        {member.avatar ? (
          <Image
            src={member.avatar}
            alt={`${member.name} avatar`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className={`text-2xl font-bold text-${member.color}-600`}>{member.initials}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
      <p className="text-gray-600 mb-4">{member.description}</p>
      
      {/* Social Links */}
      {member.socialLinks && (
        <div className="flex justify-center space-x-3">
          {Object.entries(member.socialLinks).map(([platform, url]) => {
            const isEmail = platform === 'email';
            const href = isEmail ? `mailto:${url}` : url;
            const target = isEmail ? undefined : '_blank';
            const rel = isEmail ? undefined : 'noopener noreferrer';
            const image = `/images/social/${platform}.svg`;
            return (
              <a
                key={platform}
                href={href}
                target={target}
                rel={rel}
                aria-label={`${member.name} ${platform}`}
              >
                <Image
                  src={image}
                  alt={`${platform} logo`}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Хедър */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              За КПВТ
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Научете повече за нашата мисия, ценности и общността, която изграждаме.
            </p>
          </div>
        </div>
      </section>

      {/* Секция Мисия */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Нашата мисия</h2>
              <p className="text-lg text-gray-600 mb-6">
                Клуб на Програмистите във Велико Търново (КПВТ) е посветен на насърчаването на жива и сплотена програмистка общност в нашия красив град. Вярваме, че технологиите и програмистките умения са от съществено значение за личностното развитие и развитието на общността.
              </p>
              <p className="text-lg text-gray-600">
                Нашата мисия е да създадем приобщаваща среда, в която програмисти от всички нива да учат, да си сътрудничат и да се развиват заедно, като същевременно допринасят за технологичния напредък на Велико Търново.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Нашите ценности</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Приобщаване и разнообразие</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Споделяне на знания и сътрудничество</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Постоянно учене и развитие</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Градим общност и контакти</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Иновации и креативност</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Какво правим */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Какво правим</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Организираме различни активности и събития в подкрепа на нашите членове.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Образователни уъркшопи</h3>
              <p className="text-gray-600">
                Редовни уъркшопи, обхващащи различни програмни езици, фреймуърци и технологии.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Кодинг предизвикателства</h3>
              <p className="text-gray-600">
                Месечни състезания за кодиране за изпитване на умения и приятелска конкуренция.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Събития за нетуъркинг</h3>
              <p className="text-gray-600">
                Редовни срещи и събития за създаване на контакти между местните програмисти.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Проектно сътрудничество</h3>
              <p className="text-gray-600">
                Съвместни проекти и open source инициативи за практичен опит.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Менторска програма</h3>
              <p className="text-gray-600">
                Сдвояваме опитни програмисти с начинаещи за насоки и подкрепа.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Кариерна подкрепа</h3>
              <p className="text-gray-600">
                Помощ при намиране на работа, преглед на CV-та и подготовка за интервюта.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Екип */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Нашият екип</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Запознайте се с отдадените доброволци, които правят КПВТ възможен.
            </p>
          </div>
          
          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Управителен съвет</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.boardOfDirectors.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* Regular Members */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Членове</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.regularMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Присъедини се */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готови ли сте да станете част от нашата общност?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Независимо дали сте начинаещ или опитен програмист, приветстваме ви да се присъедините към нашата разрастваща се общност.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Свържете се с нас
            </a>
            <a 
              href="/documents/membership-guidelines" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Информация за членство
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
