package com.photon.library;



import java.io.BufferedReader;
import java.io.File;
import java.io.FileFilter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.DirectoryIteratorException;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.io.comparator.LastModifiedFileComparator;
import org.apache.commons.io.filefilter.WildcardFileFilter;

import com.photon.userConfig.UserConfig;

public class WynnUtility {
	private static Process process;
	
	
public static String getLatestFile(String path, String extension) throws FileNotFoundException {
		
		File directory = new File(path);
	    File latestFile = null;
	    if (directory == null || !directory.exists() || !directory.isDirectory()) {
	    	//throw new FileNotFoundException();
	    	System.out.println("Incorrect Directory");
	    	//return latestFile.getName();
	    	throw new DirectoryIteratorException(null);
	    }

	    FileFilter fileFilter = new WildcardFileFilter("*." + extension);
	    File[] files = directory.listFiles(fileFilter);

	    if (files.length > 0) {
	        Arrays.sort(files, LastModifiedFileComparator.LASTMODIFIED_REVERSE);
	        latestFile = files[0];
	    }else {
	    	throw new FileNotFoundException("File is missing");
	    	//System.out.println("File is missing");
	    }
	     
	    return latestFile.getName();
	}
	
	/*
	 *  Methods for getting *.apk file based on latest time stamp
	 *  
	 *  *  
	 */
	
	public static String getLatestIPAFile() throws FileNotFoundException,Exception{
		
		System.out.println("IPA Filename in Test: "+ getLatestFile("IPAFile/","app"));
		
		return System.getProperty("user.dir")+File.separator +"IPAFile"+ File.separator +getLatestFile("IPAFile/","ipa");
	}
	
	/*
	 *  Methods for getting ADB devices
	 *  
	 *  *  
	 */
	
	public static String getAdbDevice() throws IOException, InterruptedException {

		
		String line = "null";
		String cmd = "adb devices";
	//
		try {		
		Process process = Runtime.getRuntime().exec(cmd);
        BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));  
        Pattern pattern = Pattern.compile("^([a-zA-Z0-9\\-]+)(\\s+)(device)");
        Matcher matcher=null;
        while ((line = in.readLine()) != null) {  
            if (line.matches(pattern.pattern())) {
                matcher = pattern.matcher(line);
                if (matcher.find())
                    System.out.println("Device ID: "+matcher.group(1));     
                return matcher.group(1);
            }
           
        }  
    } catch (IOException e) {
        e.printStackTrace();
    }
		 return "No Device Connected";
	}	
			
	
	
public static String adbCommandExecutor(String command) throws IOException {
        
        
        String os = System.getProperty("os.name");
        String packagename;
            if(os.contains("Mac"))
            {
            try {
                 
            command = UserConfig.AdbLocation+command;  
            process = Runtime.getRuntime().exec(command);
            BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String str="com.wynn.digital.key";//in.readLine();
           
            if(str.contains("olive"))
            {
            	 packagename="com.wynn.digital.key";
            	 System.out.println("It is Regression Build");
            }
            
            /* else if(str.contains("qa"))
            {
            	 packagename="com.wag.horizon.android.mystore.qa";
            	 System.out.println("It is Functional Build");
            }
            else if (str.contains(null))
            {
            	System.out.println("Null Installing build...");
            	packagename="com.wynn.digital.keyn";
            }*/
            else
            {
            	System.out.println("Installing build...");
            	packagename="com.wynn.digital.key";
            }
            
    		 return packagename;
        
            
            } catch (IOException e) {
            e.printStackTrace();
            }
            return "No Device Connected";
            }
            
            else if(os.contains("Window"))
            {
            	//String packagename;
        		//String line = "null";
        		String cmd = "adb shell pm list packages com.wynn.digital.key";
        	//
        			
        		Process process = Runtime.getRuntime().exec(cmd);
                BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream())); 
                String str=in.readLine();
                //System.out.println(str);
                
                if(str.contains("stage"))
                {
                	 packagename="com.wynn.digital.key";
                	 System.out.println("It is Staging Build");
                }
                
                else if(str.contains("mobile"))
                {
                	 packagename="com.wynn.digital.key";
                	 System.out.println("It is Production Build");
                }
                else if (str.contains("perf"))
                {
                	 packagename="com.wynn.digital.key.perf";
                	 System.out.println("It is Performance Build");
                }
                else
                {
                	 packagename="com.wynn.digital.key";
                	 System.out.println("It is Prod Build");
                }
                
        		 return packagename;
            	
            }
            
            
            else{
            	return("OS is not Supported");
            }


}
       

		
	
	public static void main(String[] args) throws Exception {
      //System.out.println( getLatestAPKFile());//+"File name:"	+	getLatestFile("ApkFile/","apk"));
		getLatestIPAFile();
       System.out.println( "Device name:"	+getAdbDevice());
	
	}


	
	
	
	

}