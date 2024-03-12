import React from 'react';
import '../style/Vidjet.css';
import imgVidget1 from '../img/photo_2024-03-12_16-54-34.jpg';
import imgVidjet2 from '../img/photo_2024-03-12_16-55-00.jpg';
import imgScriptTable from '../img/appicon.png';
import video from '../img/video.mp4';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Ви можете вибрати будь-який стиль

function Vidjet() {
	const codeString = `
	{
		"always_run_in_app" : false,
		"icon" : {
		  "color" : "teal",
		  "glyph" : "plug"
		},
		"name" : " Світло",
		"script" : "const myIP = \"PUT_YOUR_IP\"\n\nconst colors = {\n  available: {\n    textColor: \"ffffff\",\n    gradientStartColor: \"48d420\",\n    gradientEndColor: \"41961b\"\n  },\n  notAvailable: {\n    textColor: \"f0f0f0\",\n    gradientStartColor: \"9c2424\",\n    gradientEndColor: \"661414\"\n  }\n}\n\nasync function isAvailable() {\n  var request = new Request(https:\/\/vadymklymenko.com\/ping\/?ip={myIP})\n  request.headers = {\"Accept\": \"application\/json\"}\n\n  let response = await request.loadJSON()\n\n  \/\/ Scriptable will throw an error to widget in case of internet issues\n  return [response[\"status\"] == \"ok\", response[\"error\"]]\n}\n\nfunction drawHeader(isWifiAvailable, errorText, listWidget, textColor) {\n  console.log(errorText);\n  const titleText = isWifiAvailable ? \"Світло є\" : (errorText || \"Світла немає\")\n  const title = listWidget.addText(titleText)\n  title.font = Font.boldRoundedSystemFont(20)\n  listWidget.addSpacer()\n\n  title.textColor = new Color(textColor)\n}\n\nfunction drawCurrentTime(listWidget, textColor) {\n  const dateTime = new Date()\n  let df = new DateFormatter()\n  df.useShortTimeStyle()\n\n  let description = listWidget.addTex\n  description.font = Font.mediumSystemFont(13)\n  description.textColor = new Color(textColor)\n}\n\nfunction drawWidgetBackgroundGradient(isWifiAvailable, listWidget, activeColors, textColorHEX) {\n  const startColor = new Color(activeColors.gradientStartColor)\n  const endColor = new Color(activeColors.gradientEndColor)\n\n  const gradient = new LinearGradient()\n  gradient.colors = [startColor, endColor]\n  gradient.locations = [0.0, 1]\n\n  listWidget.backgroundGradient = gradient\n}\n\nasync function run() {\n  const listWidget = new ListWidget()\n\n  const [isWifiAvailable, errorText] = await isAvailable()\n  const activeColors = colors[isWifiAvailable ? \"available\" : \"notAvailable\"]\n  const { textColor } = activeColors\n\n  drawHeader(isWifiAvailable, errorText, listWidget, textColor)\n  drawCurrentTime(listWidget, textColor)\n\n  drawWidgetBackgroundGradient(isWifiAvailable, listWidget, activeColors)\n\n  if (config.runsInApp) {\n    listWidget.presentMedium()\n  }\n\n  Script.setWidget(listWidget)\n  Script.complete()\n}\n\nawait run()",
		"share_sheet_inputs" : [
	  
		]
	  }`;

	const fileString = `{
		"always_run_in_app" : false,
		"icon" : {
		  "color" : "teal",
		  "glyph" : "plug"
		},
		"name" : " Світло",
		"script" : "const myIP = \"PUT_YOUR_IP\"\n\nconst colors = {\n  available: {\n   
			 textColor: \"ffffff\",\n    gradientStartColor: \"48d420\",\n    gradientEndColor: \"41961b\"\n  },\n  notAvailable: {\n    textColor: \"f0f0f0\",\n    gradientStartColor: \"9c2424\",\n    gradientEndColor: \"661414\"\n  }\n}\n\nasync function isAvailable() 
			 {\n  var request = new Request(https:\/\/vadymklymenko.com\/ping\/?ip={myIP})\n  request.headers = {\"Accept\": \"application\/json\"}\n\n  let response = await request.loadJSON()\n\n  \/\/ Scriptable will throw an error to widget in case of internet issues\n  return [response[\"status\"] == \"ok\", response[\"error\"]]\n}\n\nfunction drawHeader(isWifiAvailable, errorText, listWidget, textColor) {\n  console.log(errorText);\n  const titleText = isWifiAvailable ? \"Світло є\" : (errorText || \"Світла немає\")\n  const title = listWidget.addText(titleText)\n  title.font = Font.boldRoundedSystemFont(20)\n  listWidget.addSpacer()\n\n  title.textColor = new Color(textColor)\n}\n\nfunction drawCurrentTime(listWidget, textColor) {\n  const dateTime = new Date()\n  let df = new DateFormatter()\n  df.useShortTimeStyle()\n\n  let description = listWidget.addText(Оновлено 
			{df.string(dateTime
	)})\n  description.font = Font.mediumSystemFont(13)\n  description.textColor = new Color(textColor)\n}\n\nfunction drawWidgetBackgroundGradient(isWifiAvailable, listWidget, activeColors, textColorHEX) {\n  const startColor = new Color(activeColors.gradientStartColor)\n  const endColor = new Color(activeColors.gradientEndColor)\n\n  const gradient = new LinearGradient()\n  gradient.colors = [startColor, endColor]\n  gradient.locations = [0.0, 1]\n\n  listWidget.backgroundGradient = gradient\n}\n\nasync function run() {\n  const listWidget = new ListWidget()\n\n  const [isWifiAvailable, errorText] = await isAvailable()\n  const activeColors = colors[isWifiAvailable ? \"available\" : \"notAvailable\"]\n  const { textColor } = activeColors\n\n  drawHeader(isWifiAvailable, errorText, listWidget, textColor)\n  drawCurrentTime(listWidget, textColor)\n\n  drawWidgetBackgroundGradient(isWifiAvailable, listWidget, activeColors)\n\n  if (config.runsInApp) {\n    listWidget.presentMedium()\n  }\n\n  Script.setWidget(listWidget)\n  Script.complete()\n}\n\nawait run()",
		"share_sheet_inputs" : [
	  
		]
	  }`;
	return (
		<div className='vidjet'>
			<h1>Налаштування віджету</h1>
			<div>
				<h3>Про віджет</h3>
				<p>Якщо у вас виникло бажання завжди мати під рукою інформацію про наявність світла вдома, то цей віджет створений саме для вас.</p>
			</div>
			<div className='vidjetImg'>
				<img src={imgVidget1} />
				<img src={imgVidjet2} />
			</div>
			<p>Віджет фактично перевіряє, чи доступний ваш роутер в інтернеті. Можуть бути випадки, що електроенергія є, хоча самого інтернету немає — в такому випадку, віджет все ще буде червоним. В мене в таких випадках інтернет зʼявлявся протягом 5-ти хвилин, але можуть бути такі проблеми також.</p>
			<div>
				<h3>Що треба робити?</h3>
				<p>Вдома повинен бути завжди статичний IP, оскільки з динамічним складно працювати. Також iOS сама вирішує, коли їй оновити віджет, і робить це по документації в інтервалі 15..60 хвилин, але фактично зазвичай виходить 15-20 хвилин. Якщо тапнути по віджету — він оновиться з актуальними даними.</p>
			</div>
			<div>
				<h3>Як?</h3>
				<ol>
					<li>Повинен бути статичний IP. Якщо роутер вимкнути-увімкнути, і IP зміниться — потрібно буде у провайдера замовляти додатково послугу статичного IP. Віджет постійно перевіряє лише одну і ту ж адресу.</li>
					<li>Роутер повинен відповідати на ping запити. Якщо повертається помилка при натисканні на кнопку «Надіслати пінг на мій IP», то треба гуглити щось «%router name% Respond to Pings from WAN» та вмикати на роутері.</li>
					<li>
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							Потрібно встановити Scriptable, завантажити файл нижче, поділитись ним в Scriptable та замінити IP в першому рядку на потрібний.
							<img src={imgScriptTable} alt='Опис зображення' />
						</div>
					</li>
					<li>Створити віджет та додати його на домашній екран.</li>
				</ol>
			</div>
			<div>
				<h3>Відео встановлення</h3>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<video controls width='100%' height='360'>
						<source src={video} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
				<h5>файл для скачення</h5>
				<SyntaxHighlighter language='javascript' style={darcula}>
					{fileString}
				</SyntaxHighlighter>

				<h5>Код для ScriptTable</h5>
				<SyntaxHighlighter language='javascript' style={darcula}>
					{codeString}
				</SyntaxHighlighter>
			</div>
			<div>
				Більше інформації ви можете прочитати за <a href='https://dou.ua/forums/topic/40716/?from=tg&utm_source=telegram&utm_medium=social'>цим посиланням</a>
			</div>
		</div>
	);
}

export default Vidjet;
