const loggerMiddleware = (store) => (next) => (action) => {
  //미들웨어 기본 구조
  console.group(action && action.type); //액션타입으로 로그를 그룹화함
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);
  console.log("다음상태", store.getState());
  console.groupEnd(); //그룹끝
};

export default loggerMiddleware;
