// CHAPTER 3 �Լ��� ���α׷���

// 3.1 ������ ������ ���ߴ� ���� ��å�̴�.

// 3.2 1�� ��: ���� ���� ���� ���α׷����ϱ�

// 3.2.1 ���� ������ ����

// ������ ���� ����

// FunctionalProgramming/DateFormatBug/src/main/java/com/paulbutcher/DateParser.java

class DateParser {
	private final DateFormat format = new SimpleDateFormat("yyyy-MM-dd");

	public Date parse(String s) throws ParseException {
		return format.parse(s);
	}
}
