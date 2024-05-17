const DateFormat = () => {
  const now: Date = new Date();

  const locale = navigator.language;

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "long",
    weekday: "long",
    timeZoneName: "short",
  };

  //UserDate - для приложения
  const UserDate = Intl.DateTimeFormat(locale, dateOptions);

  const RUdate = Intl.DateTimeFormat("ru", dateOptions);
  const USdate = Intl.DateTimeFormat("en-US", dateOptions);
  const UKdate = Intl.DateTimeFormat("en-UK", dateOptions);
  const sDate = Intl.DateTimeFormat("es-ES", dateOptions);
  const IDate = Intl.DateTimeFormat("hi-IN", dateOptions);
  const SYdate = Intl.DateTimeFormat("ar-SY", dateOptions);
  const CNDate = Intl.DateTimeFormat("zh-CN", dateOptions);

  return (
    <div className=" d-flex flex-column gap-4 mt-5">
      <div>{UserDate.format(now)}</div>
      <hr />
      <div>{RUdate.format(now)}</div>
      <div>{USdate.format(now)}</div>
      <div>{UKdate.format(now)}</div>
      <div>{sDate.format(now)}</div>
      <div>{IDate.format(now)}</div>
      <div>{SYdate.format(now)}</div>
      <div>{CNDate.format(now)}</div>
    </div>
  );
};

export default DateFormat;
