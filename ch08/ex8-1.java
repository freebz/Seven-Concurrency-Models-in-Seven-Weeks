// CHAPTER 8 람다 아키텍처

// 8.1 병렬성이 빅데이터를 가능하게 만든다

// 8.2 1일 차: 맵리듀스

// 8.2.1 실전

// 8.2.2 하둡의 기본

// 8.2.3 하둡을 이용한 단어 세기

// 매퍼

// LambdaArchitecture/WordCount/src/main/java/com/paulbutcher/WordCount.java
public static class Map extends Mapper<Object, Text, Text, IntWritable> {
	private final static IntWritable one = new IntWritable(1);

	public void map(Object key, Text value, Context context)
		throws IOException, InterruptedException {

		String line = value.toString();
		Iterable<String> words = new Words(line);
		for (String word: words)
			context.write(new Text(word), one);
	}
}


// 리듀서

// LambdaArchitecture/WordCount/src/main/java/com/paulbutcher/WordCount.java
public static class Reduce extends Reducer<Text, IntWritable, Text, IntWritable> {
	public void reduce(Text key, Iterable<IntWritable> values, Context context)
		throws IOException, InterruptedException {
		int sum = 0;
		for (IntWritable val: values)
			sum += val.get();
		context.write(key, new IntWritable(sum));
	}
}


// 드라이버

// LambdaArchitecture/WordCount/src/main/java/com/paulbutcher/WordCount.java
public class WordCount extends Configured implements Tool {

	public int run(String[] args) throws Exception {
		Configuration conf = getConf();
		Job job = Job.getInstance(conf, "wordcount");
		job.setJarByClass(WordCount.class);
		job.setMapperClass(Map.class);
		job.setReducerClass(Reduce.class);
		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);
		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.addOutputPath(job, new Path(args[1]));
		boolean success = job.waitForCompletion(true);
		return success ? 0 : 1;
	}

	public static void main(String[] args) throws Exception {
		int res = ToolRunner.run(new Configuration(), new WordCount(), args);
		System.exit(res);
	}
}


// 지역적으로 실행하기

// LambdaArchitecture/WordCount/input/file1.txt
one potato two potato three potato four


// LambdaArchitecture/WordCount/input/file2.txt
five potato siz potato seven potato more


$ hadoop jar target/wordcount-1.0-jar-with-dependencies.jar input output


// 8.2.4 아마존 EMR에서 실행하기

// 입력과 출력

// 클러스터 만들기

$ elastic-mapreduce --create --name wordcount --num-instances 11 \
--master-instance-type m1.large --slave-instance-type m1.large \
--ami-version 3.0.2 --jar s3://pb7con-lambda/wordcount.jar \
--arg s3://pb3con-wikipedia/text --arg s3://pb7con-wikipedia/counts
Created job flow j-2LSRGPBSR79ZV


// 진행상황 모니터하기

$ elastic-mapreduce --jobflow j-2LSRGPBSR79ZV --ssh

	
$ tail -f /mnt/var/log/hadoop/steps/1/syslog
INFO org.apache.hadooop.mapreduce.Job (main): map 0% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 1% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 2% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 3% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 4% reduce 0%


// 결과 검사하기
	
