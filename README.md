# 🖼️ SEMA 서울시립미술관

## 🌱 프로젝트 링크  
🔗 [ SEMA 서울시립미술관 ](https://github.com/mjpark-2k/sema.git)

---

## 📄 프로젝트 설명  
이 프로젝트는 **서울시립미술관 API**를 활용한 모바일 어플리케이션으로,  
**실시간 전시 정보**, **사용자 맞춤 북마크 기능**, **PWA 디자인**을 제공합니다.  
사용자는 **전시 검색**, **상세정보 열람**, **즐겨찾기 및 로그인 기능**을 이용할 수 있습니다.

---

## ⏱️ 개발 기간
**2024.09.27(금) - 2024.10.16(수) (약 2주)**

---

## 🛠️ 기술 스택  
**프론트엔드**  
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)

**백엔드 & 인증**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=flat&logo=nextdotjs&logoColor=white)

**기타**  
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## 💾 설치 및 실행 방법  

```bash
# 저장소 클론
git clone https://github.com/mjpark-2k/sema.git

# 디렉토리 이동
cd sema

# 패키지 설치
npm install

# 개발 서버 실행 (Next.js 기준)
npm run dev
```

---

## ⚙️ 주요 기능  
- 🔍 **실시간 검색**: 하단 돋보기 아이콘 → 검색 페이지  
- 🔖 **북마크 기능**: 상세페이지 하트 클릭 → 북마크 페이지에 저장  
- 🔐 **소셜 로그인**: 카카오 / 네이버 로그인 지원  
- 💾 **스크랩 저장**: Firebase 연동  
- 📱 **PWA 디자인**: 모바일 사용 최적화

---

## 🖥️ 사용법
- **검색** : 하단 돋보기모양 아이콘 클릭 해 검색페이지에서 검색어를 입력합니다.
- **북마크** : 상세페이지에서 하트모양 아이콘을 클릭하면 하트 아이콘 색상이 변경되며 북마크 페이지에 저장됩니다. 하단 북마크 아이콘 클릭 해 북마크 페이지에서 북마크 한 작품들을 한 번에 확인 할 수 있습니다.
- **로그인** : 하단 사람 모양 아이콘에서 로그인/회원가입 할 수 있습니다.

---

## 🧯 트러블 슈팅  
| 페이지 | 문제 | 해결 방법 |
|--------|------|-----------|
| 메인 | 슬라이드 기능 4곳, 일부 jQuery로 구현 | 기능 분리 및 코드 정리 |
| 검색 | API 데이터 실시간 반영 | fetch + debounce 적용 |
| 스크랩 | 스크랩 저장 오류 | Firebase 구조 변경 |
| 상세페이지 | HTML 문법 노출 | dangerouslySetInnerHTML 활용 |
| 마이페이지 | 로그인 오류 | NextAuth 설정 및 소셜 연동 수정 |

---

## 🔬 기여 방법
- Firebase 스크랩 기능 구현  
- 검색 기능 인터랙션 설계  
- 상세페이지 렌더링 처리  
- PWA 최적화 구조 설계

---

## 🖋️ 라이센스
이 프로젝트는 서울 열린데이터 광장에서 제공하는 공공 API를 활용해 제작되었습니다.  
학습 및 포트폴리오 용도로 제작되었습니다.

---

## 📞 연락처
- 📧 Email: mjpark.2k@gmail.com
- 📒 Github: [ mjpark-2k ](https://github.com/mjpark-2k)
