// 8.3 2일 차: 배치 계층

// 8.3.1 전통적인 데이터 시스템의 문제

// 8.3.2 불멸의 진리

// 8.3.3 원천 데이터가 좋은 것이다

// 8.3.4 위키피디아 기여자들

// LambdaArchitecture/WikiContributorsBatch/src/main/java/com/paulbutcher/WikipediaContributors.java
public static class Map extends Mapper<Object, Text, IntWritable, LongWritable> {

	public void map(Object key, Text value, Context context)
		throws IOException, InterruptedException {

		Contribution contribution = new Contribution(value.toString());
		context.write(new IntWritable(contribution.contributorId),
									new LongWritable(contribution.timestamp));
	}
}


// LambdaArchitecture/WikiContributorsBatch/src/main/java/com/paulbutcher/Contribution.java
class Contribution {
	static final Pattern pattern = Pattern.compile("^([^\\s]*) (\\d*) (\\d*) (.*)$");
	static final DateTimeFormatter isoFormat = ISODateTimeFormat.dateTimeNoMillis();

	public long timestamp;
	public int id;
	public int contributorId;
	public String username;

	public Contribution(String line) {
		Matcher matcher = pattern.matcher(line);
		if(matcher.find()) {
			timestamp = isoFormat.parseDateTime(matcher.group(1)).getMillis();
			id = Integer.parseInt(matcher.group(2));
			contributorId = Integer.parseInt(matcher.group(3));
			username = matcher.group(4);
		}
	}
}


// LambdaArchitecture/WikiContributorsBatch/src/main/java/com/paulbutcher/WikiContributors.java
public static class Reduce
	extends Reducer<IntWritable, LongWritable, IntWritable, Text> {
	static DateTimeFormatter dayFormat = ISODateTimeFormat.yearMonthDay();
	static DateTimeFormatter monthFormat = ISODateTimeFormat.yearMonth();

	public void reduce(IntWritable key, Iterable<LongWritable> values,
										 Context context) throws IOException, InterruptedException {
		HashMap<DateTime, Integer> days = new HashMap<DateTime, Integer>();
		HashMap<DateTime, Integer> months = new HashMap<DateTime, Integer>();
		for (LongWritable value: values) {
			DateTime timestamp = new DateTime(value.get());
			DateTime day = timestamp.withTimeAsStartOfDay();
			DateTime month = day.withDayOfMonth(1);
			incrementCount(days, day);
			incrementCount(months, month);
		}
		for (Entry<DateTime, Integer> entry: days.entrySet())
			context.write(key, formatEntry(entry, dayFormat));
		for (Entry<DateTime, Integer> entry: months.entrySet())
			context.write(key, formatEntry(entry, monthFormat));
	}
}


// LambdaArchitecture/WikiContributorsBatch/src/main/java/com/paulbutcher/WikiContributors.java
private void incrementCount(HashMap<DateTime, Integer> counts, DateTime key) {
	Integer currentCount = counts.get(key);
	if (currentCount == null)
		counts.put(key, 1);
	else
		counts.put(key, currentCount + 1);
}


// LambdaArchitecture/WikiContributorsBatch/src/main/java/com/paulbutcher/WikiContributors.java
private Text formatEntry(Entry<DateTime, Integer> entry,
												 DateTimeFormatter formatter) {
	return new Text(formatter.print(entry.getKey()) + "\t" + entry.getValue());
}


// 8.3.5 그림 완성하기
