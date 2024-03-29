# 포켓몬 씰 수집북
포켓몬 씰 수집북 입니다.

## 프로젝트를 시작하게 된 계기
2022년 2월 부터 삼립식품계열에서 포켓몬스터 빵을 재판매 한다는 소식과 함께 많은 사람들은 포켓몬스터의 빵을 사들이기 시작했습니다. 특히 빵 맛의 그리움 때문에 찾는 부분도 있지만 빵을 구매하면 물품 안에 있는 빵과 같이 있는 포켓몬스터 씰 때문에 다시 인기를 불러 들어왔습니다. 사람들이 씰을 많이 모으는데, 이 씰을 잃어버리지 않고 특히 씰 같은 경우 스티커 이다 보니 떨어져 나갈수도 있어 잘 보관하여 기억할수 있게 기획한 토이 프로젝트 입니다.

## 프로젝트 도안 링크
https://www.figma.com/file/c6CMLWZhPfDlsxgRD1hVaC/pocketmon-seal?node-id=0%3A1

## 사용한 라이브러리 
expo-camera, react-navigation, react-stack-navigator, pickerselect, MediaLibrary, Platform, Fetch, Flatlist

## 지금까지 한 기록
- 기본적인 컴포넌트로 UI 디자인 배치
- 사진 촬영 및 갤러리에 저장 기능 및 navigation을 이용해 화면 전환 구성
- pokeapi를 이용해 pickerselect에 item을 추가함. <br/>
    -> pokeapi 제거, poketname-korean.json 파일을 만들어 import하여 사용함.

## 프로젝트를 하면서 어려웠던 부분
- React Native는 네이티브(Android, Ios)나 플러터(Flutter)에 비해 구글링을 하면 데이터가 많지 않아 독학을 하면서 토이 프로젝트를 진행하는데 어려움을 많이 느낌.
- 크로스플랫폼 개발의 장점이 두개의 운영체제를 하나의 언어로 한번에 개발을 할수 있다는 장점이 있었지만, 몇몇의 모듈을 사용하는 부분에서 각 운영체제의 환경에 맞춰 개발해야되는 점 때문에 어쩔수 없이 네이티브 언어를 알아야 하는 단점이 있음.
- Pickerselect를 이용해 item별로 사진을 정형화 했을시 item에 따라 사진을 분류시키는데 어려움을 느낌.

## 해야 될 것
1. 사진 촬영 및 저장한후 포켓몬 지정한후 데이터 저장하기
2. collectionScreen에서 포켓몬 지정하면 저장된 데이터 불러오기(like 인스타그램 of mypage)
3. 스크린 cycle 리팩토링하기(스크린 이동 경로를 확실하게 정할 필요가 있음)
