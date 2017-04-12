// CHAPTER 3 함수형 프로그래밍

// 3.1 문제가 있으면 멈추는 것이 상책이다.

// 3.2 1일 차: 가변 상태 없이 프로그래밍하기

// 3.2.1 가변 상태의 위험

// 숨겨진 가변 상태

// FunctionalProgramming/DateFormatBug/src/main/java/com/paulbutcher/DateParser.java

class DateParser {
	private final DateFormat format = new SimpleDateFormat("yyyy-MM-dd");

	public Date parse(String s) throws ParseException {
		return format.parse(s);
	}
}
