// CHAPTER 8 ���� ��Ű��ó

// 8.1 ���ļ��� �����͸� �����ϰ� �����

// 8.2 1�� ��: �ʸ��ེ

// 8.2.1 ����

// 8.2.2 �ϵ��� �⺻

// 8.2.3 �ϵ��� �̿��� �ܾ� ����

// ����

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


// ���༭

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


// ����̹�

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


// ���������� �����ϱ�

// LambdaArchitecture/WordCount/input/file1.txt
one potato two potato three potato four


// LambdaArchitecture/WordCount/input/file2.txt
five potato siz potato seven potato more


$ hadoop jar target/wordcount-1.0-jar-with-dependencies.jar input output


// 8.2.4 �Ƹ��� EMR���� �����ϱ�

// �Է°� ���

// Ŭ������ �����

$ elastic-mapreduce --create --name wordcount --num-instances 11 \
--master-instance-type m1.large --slave-instance-type m1.large \
--ami-version 3.0.2 --jar s3://pb7con-lambda/wordcount.jar \
--arg s3://pb3con-wikipedia/text --arg s3://pb7con-wikipedia/counts
Created job flow j-2LSRGPBSR79ZV


// �����Ȳ ������ϱ�

$ elastic-mapreduce --jobflow j-2LSRGPBSR79ZV --ssh

	
$ tail -f /mnt/var/log/hadoop/steps/1/syslog
INFO org.apache.hadooop.mapreduce.Job (main): map 0% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 1% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 2% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 3% reduce 0%
INFO org.apache.hadooop.mapreduce.Job (main): map 4% reduce 0%


// ��� �˻��ϱ�
	
