## Functions

<dl>
<dt><a href="#EmailDetails">EmailDetails(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component to display email details based on the selected email type.</p>
</dd>
<dt><a href="#EmailList">EmailList(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component representing the list of emails.</p>
</dd>
<dt><a href="#ListHeader">ListHeader(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>ListHeader component representing the header of the email list.</p>
</dd>
<dt><a href="#Subject">Subject(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Subject component representing the subject line of an email.</p>
</dd>
<dt><a href="#Welcome">Boilerplate()</a></dt>
<dd><p>Renders predefined common boilerplate.
Allows individual copy &amp; paste for each div</p>
</dd>
</dl>

<a name="EmailDetails"></a>

## EmailDetails(props) ΓçÆ <code>JSX.Element</code>
Component to display email details based on the selected email type.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - Email details component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Props object. |
| props.selectedEmail | <code>Object</code> | Selected email object. |

<a name="EmailList"></a>

## EmailList(props) ΓçÆ <code>JSX.Element</code>
Component representing the list of emails.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - The rendered component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |
| props.selectedEmail | <code>Object</code> | The selected email. |
| props.setSelectedEmail | <code>function</code> | Function to set the selected email. |
| props.setIsToggled | <code>function</code> | Function to set the toggle state between TSC and COE. |


* [EmailList(props)](#EmailList) ΓçÆ <code>JSX.Element</code>
    * [~handleOptionChange(option)](#EmailList..handleOptionChange)
    * [~handleEmailItemClick(id, name, type)](#EmailList..handleEmailItemClick)

<a name="EmailList..handleOptionChange"></a>

### EmailList~handleOptionChange(option)
Function to handle the change in selected option (TSC or COE).

**Kind**: inner method of [<code>EmailList</code>](#EmailList)  

| Param | Type | Description |
| --- | --- | --- |
| option | <code>string</code> | The selected option. |

<a name="EmailList..handleEmailItemClick"></a>

### EmailList~handleEmailItemClick(id, name, type)
Function to handle email item click.

**Kind**: inner method of [<code>EmailList</code>](#EmailList)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the email. |
| name | <code>string</code> | The name of the email. |
| type | <code>string</code> | The type of the email (TSC or COE). |

<a name="ListHeader"></a>

## ListHeader(props) ΓçÆ <code>JSX.Element</code>
ListHeader component representing the header of the email list.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - The rendered component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |
| props.selectedOption | <code>string</code> | The currently selected option (COE or TSC). |
| props.onSelectedOption | <code>function</code> | The function to handle option change. |

<a name="Subject"></a>

## Subject(props) ΓçÆ <code>JSX.Element</code>
Subject component representing the subject line of an email.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - The rendered component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |
| props.caseNumber | <code>string</code> | The case number. |
| props.selectedEmail | <code>Object</code> | The selected email. |
| props.companyName | <code>string</code> | The company name. |
| props.shortDescription | <code>string</code> | The short description. |
| props.incidentNumber | <code>string</code> | The incident number. |

<a name="Subject..copyToClipboard"></a>

### Subject~copyToClipboard()
Function to copy the subject line to the clipboard.

**Kind**: inner method of [<code>Subject</code>](#Subject)  
<a name="Boilerplate"></a>

## Boilerplate()
Renders predefined common boilerplate.
Allows individual copy & paste for each div

**Kind**: global function  
<a name="Boilerplate..handleCopy"></a>

### Boilerplate~handleCopy(index)
Handles copying the content of each list to the clipboard.

**Kind**: inner method of [<code>Boilerplate</code>](#Welcome)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the list to copy. (feel free to add as many as needed) |

## Functions

<dl>
<dt><a href="#Boilerplate">Boilerplate()</a></dt>
<dd><p>Renders predefined common boilerplate.
Allows individual copy &amp; paste for each div</p>
</dd>
<dt><a href="#Box">Box(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component for rendering a box container with specified width.</p>
</dd>
<dt><a href="#EmailDetails">EmailDetails(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component to display email details based on the selected email type.</p>
</dd>
<dt><a href="#EmailItem">EmailItem(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component for rendering an email item container.</p>
</dd>
<dt><a href="#EmailList">EmailList(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component representing the list of emails.</p>
</dd>
<dt><a href="#ListHeader">ListHeader(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>ListHeader component representing the header of the email list.</p>
</dd>
<dt><a href="#Main">Main(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Component for rendering a box container with specified width.</p>
</dd>
<dt><a href="#Subject">Subject(props)</a> ΓçÆ <code>JSX.Element</code></dt>
<dd><p>Subject component representing the subject line of an email.</p>
</dd>
</dl>

<a name="Boilerplate"></a>

## Boilerplate()
Renders predefined common boilerplate.
Allows individual copy & paste for each div

**Kind**: global function  
**Author**: Eduardo da Silva.  
<a name="Boilerplate..handleCopy"></a>

### Boilerplate~handleCopy(index)
Handles copying the content of each list to the clipboard.

**Kind**: inner method of [<code>Boilerplate</code>](#Boilerplate)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the list to copy. (feel free to add as many as needed) |

<a name="Box"></a>

## Box(props) ΓçÆ <code>JSX.Element</code>
Component for rendering a box container with specified width.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The JSX element representing the box container.  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The props passed to the component. |
| props.children | <code>React.ReactNode</code> | The content to be rendered inside the box. |
| props.width | <code>string</code> | The width of the box. |

<a name="EmailDetails"></a>

## EmailDetails(props) ΓçÆ <code>JSX.Element</code>
Component to display email details based on the selected email type.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - Email details component.  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Props object. |
| props.selectedEmail | <code>Object</code> | Selected email object. |

<a name="EmailItem"></a>

## EmailItem(props) ΓçÆ <code>JSX.Element</code>
Component for rendering an email item container.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The JSX element representing the email item container.  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The props passed to the component. |
| props.children | <code>React.ReactNode</code> | The content to be rendered inside the email item. |
| props.className | <code>string</code> | The additional class name for styling purposes. |

<a name="EmailList"></a>

## EmailList(props) ΓçÆ <code>JSX.Element</code>
Component representing the list of emails.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - The rendered component.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |
| props.selectedEmail | <code>Object</code> | The selected email. |
| props.setSelectedEmail | <code>function</code> | Function to set the selected email. |
| props.setIsToggled | <code>function</code> | Function to set the toggle state between TSC and COE. |


* [EmailList(props)](#EmailList) ΓçÆ <code>JSX.Element</code>
    * [~handleOptionChange(option)](#EmailList..handleOptionChange)
    * [~handleEmailItemClick(id, name, type)](#EmailList..handleEmailItemClick)

<a name="EmailList..handleOptionChange"></a>

### EmailList~handleOptionChange(option)
Function to handle the change in selected option (TSC or COE).

**Kind**: inner method of [<code>EmailList</code>](#EmailList)  

| Param | Type | Description |
| --- | --- | --- |
| option | <code>string</code> | The selected option. |

<a name="EmailList..handleEmailItemClick"></a>

### EmailList~handleEmailItemClick(id, name, type)
Function to handle email item click.

**Kind**: inner method of [<code>EmailList</code>](#EmailList)  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The ID of the email. |
| name | <code>string</code> | The name of the email. |
| type | <code>string</code> | The type of the email (TSC or COE). |

<a name="ListHeader"></a>

## ListHeader(props) ΓçÆ <code>JSX.Element</code>
ListHeader component representing the header of the email list.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - The rendered component.  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |
| props.selectedOption | <code>string</code> | The currently selected option (COE or TSC). |
| props.onSelectedOption | <code>function</code> | The function to handle option change. |

<a name="Main"></a>

## Main(props) ΓçÆ <code>JSX.Element</code>
Component for rendering a box container with specified width.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The JSX element representing the box container.  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The props passed to the component. |
| props.children | <code>React.ReactNode</code> | The content to be rendered inside the box. |
| props.width | <code>string</code> | The width of the box. |

<a name="Subject"></a>

## Subject(props) ΓçÆ <code>JSX.Element</code>
Subject component representing the subject line of an email.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - - The rendered component.  
**Author**: Eduardo da Silva.  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | The component props. |
| props.caseNumber | <code>string</code> | The case number. |
| props.selectedEmail | <code>Object</code> | The selected email. |
| props.companyName | <code>string</code> | The company name. |
| props.shortDescription | <code>string</code> | The short description. |
| props.incidentNumber | <code>string</code> | The incident number. |

<a name="Subject..copyToClipboard"></a>

### Subject~copyToClipboard()
Function to copy the subject line to the clipboard.

**Kind**: inner method of [<code>Subject</code>](#Subject)  
