# Apex_Profiler
Apex_Profiler
# Description 
APEX profile Plugin is designed to display User profile
# References 
Big thanks to <a href="https://oracle-apex5.blogspot.com/2017/10/apex-builder-profil-menu.html">Muqbil Khan</a> for sharing this amazing idea.

<img src="https://raw.githubusercontent.com/ashishtheapexian/Apex_Profiler/master/preview.gif">

# Sample Query
<code> <pre>SELECT
  'Ashish' FIRST_NAME,
  'Sahay' LAST_NAME,
  'https://1.bp.blogspot.com/-V1JkM-D5VY4/XmCZuNHGytI/AAAAAAAAdec/RsZXgr11hHM8TXuWiLyns_4L9DJ4LPD2QCK4BGAYYCw/s113/0%253Fe%253D1586390400%2526v%253Dbeta%2526t%253DrDhapAPOdu3qco8WpAs1kTxVPf0533bNvx92guVCyVw' IMAGE_SRC,
  'https://www.ashishsahay.com/search/label/APEX' EDIT_LINK_SRC,
  'ashishk392@gmail.com' EMAIL,
  'INCEDO INC.' ORG_NAME,
  'Company' ORG_LABEL,
  'Oracle Apex Developer' DESIGNATION,
  'Github' LEFT_BUTTON_LABEL,
  'Blogs' RIGHT_BUTTON_LABEL,
  'https://github.com/ashishtheapexian' LEFT_BUTTON_LINK,
  'https://www.ashishsahay.com' RIGHT_BUTTON_LINK,
  'true' LEFT_BUTTON_HOT,
  'true' RIGHT_BUTTON_HOT,
  'left' LEFT_BTN_ICON_POS,
  'right' RIGHT_BTN_ICON_POS,
  'fa fa-github' LEFT_BTN_ICON,
  'fa fa-google' RIGHT_BTN_ICON,
  'See My Blogs' EDIT_LINK_LABEL
FROM DUAL;</pre>
</code>


# JSON Configuration

<code><pre>
{
	"isActiveColor": "#F44336",
	"isInctiveColor": "#F4bc36",
	"panelHeight": "216px",
	"panelWIdth": "401px",
	"marginRight": "0px",
	"marginTop": "48px"
}
</pre></code>
<ul>
<li>isActiveColor: Navigation bar Entry background color when APEX profiler is open  </li>
<li>isInctiveColor: Navigation bar Entry background color when APEX profiler is closed</li>
<li>panelHeight: APEX Profiler panel height</li>
<li>panelWIdth: APEX Profiler panel width</li>
<li>marginRight: APEX profiler distance from Right</li>
<li>marginTop : APEX profiler distance from TOP</li>
</ul>


#Query Attributes

<table>
<tbody>
<tr>
 <th>Attribute Name</th>
 <th>Description</th>  
 <th>Example</th>  
</tr>
<tr>
 <td>FIRST_NAME</td>
 <td>Display First Name in Profile</td> 
 <td>Ashish</td> 
</tr>
<tr>
 <td>LAST_NAME</td>
 <td>Display Last Name in Profile</td> 
 <td>Sahay</td> 
</tr>
<tr>
 <td>IMAGE_SRC</td>
 <td>User&nbsp; Profile image URL</td> 
 <td>https://1.bp.blogspot.com/-V1JkM-https://www.w3schools.com/howto/img_avatar.png</td> 
</tr>
<tr>
 <td>EDIT_LINK_SRC</td>
 <td>Profile Edit link</td> 
 <td>https://www.ashishsahay.com/search/label/APEX</td> 
</tr>
<tr>
 <td>EDIT_LINK_LABEL</td>
 <td>Edit Profile Label</td> 
 <td>View My Blogs/ Edit Profile</td>
</tr>
<tr>
 <td>EMAIL</td>
 <td>User email address</td> 
 <td>ashishk392@gmail.com</td>
</tr>
<tr>
 <td>ORG_NAME</td>
 <td>Organization/ Company name</td> 
 <td>INCEDO INC.</td> 
</tr>
<tr>
 <td>ORG_LABEL</td>
 <td>Organization/Company Label</td> 
 <td>Company / Organization/ Country</td> 
</tr>
<tr>
 <td>DESIGNATION</td>
 <td>User designation</td> 
 <td>Oracle Apex Developer</td> 
</tr>
<tr>
 <td>LEFT_BUTTON_LABEL</td>
 <td>Left Button Label</td> 
 <td>Github</td> 
</tr>
<tr>
 <td>RIGHT_BUTTON_LABEL</td>
 <td>Right Button Label&nbsp;</td> 
 <td>Blogs/ Sign Out</td> 
</tr>
<tr>
 <td>LEFT_BUTTON_LINK</td>
 <td>Left Button Link</td> 
 <td>https://www.ashishsahay.com</td> 
</tr>
<tr>
 <td>RIGHT_BUTTON_LINK</td>
 <td>Right Button Link</td> 
 <td>https://www.ashishsahay.com</td> 
</tr>
<tr>
 <td>RIGHT_BUTTON_HOT</td>
 <td>Right Button Hot or Not</td> 
 <td>true/ false</td> 
</tr>
<tr>
 <td>LEFT_BTN_ICON_POS</td>
 <td>Left Button Icon position</td> 
 <td>left/ right</td> 
</tr>
<tr>
 <td>RIGHT_BTN_ICON_POS</td>
 <td>Right Button Icon position&nbsp;</td> 
 <td>left/ right</td> 
</tr>
<tr>
 <td>LEFT_BTN_ICON</td>
 <td>Left Button Icon</td> 
 <td>fa fa-github</td> 
</tr>
<tr>
 <td>RIGHT_BTN_ICON</td>
 <td>Right Button Icon</td> 
 <td>fa fa-google</td> 
</tr>
</tbody></table>

# TO DO
- [x] Comaptible with all versions of APEX
- [ ] Escape special Characters

# Explanation
<h2><a href="https://www.ashishsahay.com/2020/03/apex-user-profiler.html"> Blog</a></h2>
</br>
<h2><a href="https://apex.oracle.com/pls/apex/f?p=93690:10:702064819366086::NO:::">Demo</a></h2>


# Change Log
<ul>
  <li>2020 March 06:  Initial Version 1.0.1</li>
  <li>2020 March 08:  Compatible with 5.1 and above versions 1.1</li>
</ul>

