var test = { 
	'h1Title': 'Тест по программированию',
  'questions' : [{
  	'questionMain': 'Вопрос №', 
    'listQuestion': [{
		    	'label': 'Вариант ответа №1',
			    'id': 'checkbox-1'
					},
				  {
					'label': 'Вариант ответа №2',
					'id': 'checkbox-2'
				  },
				  {
					'label': 'Вариант ответа №3',
					'id': 'checkbox-3'
			  	}
				]
			},
		   {
			'questionMain': 'Вопрос №',
			'listQuestion': [{
					'label': 'Вариант ответа №1',
					'id': 'checkbox-4'
				},
				{
					'label': 'Вариант ответа №2',
					'id': 'checkbox-5'
				},
				{
					'label': 'Вариант ответа №3',
					'id': 'checkbox-6'
				  }
				 ]
				},
		    {
			'questionMain': 'Вопрос №',
			'listQuestion': [
				{
					'label': 'Вариант ответа №1',
					'id': 'checkbox-7'
				},
				{
					'label': 'Вариант ответа №2',
					'id': 'checkbox-8'
				},
				{
					'label': 'Вариант ответа №3',
					'id': 'checkbox-9'
				  }
				]
			}
    ]
  };
var page = {
	addWrapper: function() {
		var div = document.createElement('div');//создаём 'div' с классом 'wrapper'
		div.className = 'wrapper';
		document.body.appendChild(div);         //вставляем в тег 'body' 
	},
	addHead: function() {
		var div = document.createElement('div');  //создаём 'div' с классом 'head'
		div.className = 'head';
		document.querySelector('.wrapper').appendChild(div); //вставляем в тег 'wrapper' 
	

		var h1Title = document.createElement('h1');	//создаём  тег'h1' с классом 'head-name'
		h1Title.innerHTML = test.h1Title;		
		h1Title.className = 'head-name';
		div.appendChild(h1Title);
	
	},
	addMain: function() {
		var main = document.createElement('div');
		main.className = 'main';
		document.querySelector('.wrapper').appendChild(main);
	},
	addForm: function() {
		var form = document.createElement('form');
		form.className = 'form';
		form.setAttribute ('action','#');
		document.querySelector('.main').appendChild(form);

		for (var i = 0; i < test.questions.length; i++) {
				var questionMain = document.createElement('p');
				questionMain.className = 'ul-title ul-title-' + (i + 1);
				questionMain.innerHTML = (i + 1) + '. ' + test.questions[i].questionMain + (i + 1);
				form.appendChild(questionMain);

				var list = document.createElement('ul');
				list.className = 'list list-' + i;
				form.appendChild(list);
				
				for (var j = 0; j < test.questions[i].listQuestion.length; j++) {
					var item = document.createElement('li');
					item.className = 'item item-'+ (j + 1);
					list.appendChild(item);

					var checkBox = document.createElement('input');
					checkBox.className = 'my-checkbox';
					checkBox.setAttribute('type', 'checkbox');
					checkBox.setAttribute('id', test.questions[i].listQuestion[j].id);					
					item.appendChild(checkBox);

					var label = document.createElement('label');
					label.className = 'my-label';
					label.innerHTML = test.questions[i].listQuestion[j].label;
					label.setAttribute('for', test.questions[i].listQuestion[j].id);
					item.appendChild(label);
				}
		}
	},
	addBtn: function() {
		var div = document.createElement('div');
		div.className = 'btn-box';
		document.querySelector('.form').appendChild(div);

		var button = document.createElement('input');
		button.className = 'btn';
		button.setAttribute('type', 'submit');
		button.setAttribute('value', 'Проверить мои результаты');
		div.appendChild(button);

	},
	pageInit: function() {
		page.addWrapper();
		page.addHead();
		page.addMain();
		page.addForm();
		page.addBtn();
	},
}
page.pageInit();