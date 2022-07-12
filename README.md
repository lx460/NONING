## 프로젝트명 : 

## 팀원소개

#### 이승연(팀장/ Backend)

#### 이도엽(maintainer/ Frontend)

#### 이보나(Frontend)

#### 김민균(Frontend)

#### 이재순(maintainer/ Backend)

<br/>

## 프로젝트 소개 



<br/>

## 사용언어, 기술스택 



<br/>

## 버전 관리




<br/>

## 기획

#### 기능명세서

<br/>

## 서비스 설명 

#### 폴더 구조 - Frontend
<br/>


#### 폴더 구조 - Backend
<br/>


## 페이지 기능 소개 
<br/>


## Git Branch Command

#### 원격 저장소 갱신

```
git remote update
```

#### 원격 저장소 갱신(브랜치 삭제까지 포함)

```
git remote update --prune
```

#### branch 전체 목록 조회(빨간 것이 원격저장소)

```
git branch -a
```

#### branch 바꾸기

```
git checkout {브랜치명}
```

#### branch 생성 (각 Dev 브랜치에서 생성할 것)
#### ex) BE는 BE Develop에서 생성)
```
git branch {브랜치명}    <= 로컬에 브랜치 생성 하는 것
git checkout -b {브랜치명} <= 로컬에 브랜치 생성함과 동시에 브랜치 바꾸기
```

#### branch 푸쉬(로컬-> 원격) (주로 이렇게 쓸 것)
```
git push origin {브랜치명}
```
<br/>

## Develop Rules
<br/>

#### branch 

```
master -> develop -> FE develop -> feat/기능명
master -> develop -> BE develop -> feat/기능명
```



#### merge



#### commit 메시지 

```
FE(BE)_날짜_개발한(중인)기능: 개발 내용   
```



#### code style





## 개발 일정 



