// InputMask(Телефон)
  $(document).ready(function() {
    $('.phone').inputmask("(99) 99999-9999", {"onincomplete": function() {
      $('.phone').val();
          swal('Opsss !', 'Неполные телефонные данные. Пожалуйста проверьте','info');
          return false;
        }})
    });

  // Валидация
  //а) форма frontend
  function validateEmail(email) {
    const regex= regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    };
    function validateForm() {
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const address = document.getElementById('address').value;
      const experience = document.getElementById('experience').value;
      const skills = document.getElementById('skills').value;
      const file = document.getElementById('file').value;

      if (name=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле имя не может быть пустым.", "error");
        return false;
      }

      else if (name==name.toUpperCase()) {
        document.getElementById('bg-spinner').style.display="none"; 
        document.getElementById('name').value = '';
        swal('Opsss !', "Поле имя не может быть В ВЕРХНЕМ РЕГИСТРЕ.", "info");
        return false;
      }

      else if (name.split(' ').length < 2) {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('О-О-у !', "Нужно полное имя.", "info");
        return false;
      }

      else if (age=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле возраст не может быть пустым.", "error");
        return false;
      }

      else if ((age < 18) || (age > 60) ) {
        document.getElementById('bg-spinner').style.display="none"; 
        document.getElementById('age').value = '';
        swal('О-О-у !', "Возраст должен быть от 18 до 60 лет.", "info");
        return false;
      }

      else if (email=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле email не может быть пустым.", "error");
        return false;
      }

      else if (!(validateEmail(email))) {
        document.getElementById('bg-spinner').style.display="none"; 
        document.getElementById('email').value = '';
        swal('О-О-у !', "Ваедите действительный email.", "info");
        return false;
      }

      else if (phone=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле телефон не может быть пустым.", "error");
        return false;
      }

      else if (address=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле адрес не может быть пустым.", "error");
        return false;
      }

      else if (experience=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле опыт не может быть пустым.", "error");
        return false;
      }

      else if (skills=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Поле навыки не может быть пустым.", "error");
        return false;
      }

      else if (file=="") {
        document.getElementById('bg-spinner').style.display="none"; 
        swal('Opsss !', "Файл не может быть пустым.", "error");
        return false;
      }

      else {
        return true;
      }
    }

  //b) форма backend
  function validateEmail2(email2) {
    const regex= regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email2);
    };
    function validateForm2() {
      const name2 = document.getElementById('name2').value;
      const age2 = document.getElementById('age2').value;
      const email2 = document.getElementById('email2').value;
      const phone2 = document.getElementById('phone2').value;
      const address2 = document.getElementById('address2').value;
      const experience2 = document.getElementById('experience2').value;
      const skills2 = document.getElementById('skills2').value;
      const file2 = document.getElementById('file2').value;

      if (name2=="") {
        swal('Opsss !', "Поле имя не может быть пустым.", "error");
        return false;
      }

      else if (name2==name2.toUpperCase()) {
        document.getElementById('name').value = '';
        swal('Opsss !', "Поле имя не может быть В ВЕРХНЕМ РЕГИСТРЕ.", "info");
        return false;
      }

      else if (name2.split(' ').length < 2) {
        swal('О-О-у !', "Нужно полное имя.", "info");
        return false;
      }

      else if (age2=="") {
        swal('Opsss !', "Поле возраст не может быть пустым.", "error");
        return false;
      }

      else if ((age2 < 18) || (age2 > 60) ) {
        document.getElementById('age2').value = '';
        swal('О-О-у !', "Возраст должен быть от 18 до 60 лет.", "info");
        return false;
      }

      else if (email2=="") {
        swal('Opsss !', "Поле email не может быть пустым.", "error");
        return false;
      }

      // else if (!(validateEmail2(email2))) {
      //   document.getElementById('email').value = '';
      //   swal('О-О-у !', "Ваедите действительный email.", "info");
      //   return false;
      // }

      else if (phone2=="") {
        swal('Opsss !', "Поле телефон не может быть пустым.", "error");
        return false;
      }

      else if (address2=="") {
        swal('Opsss !', "Поле адрес не может быть пустым.", "error");
        return false;
      }

      else if (experience2=="") {
        swal('Opsss !', "Поле опыт не может быть пустым.", "error");
        return false;
      }

      else if (skills2=="") {
        swal('Opsss !', "Поле навыки не может быть пустым.", "error");
        return false;
      }

      else if (file2=="") {
        swal('Opsss !', "Файл не может быть пустым.", "error");
        return false;
      }

      else {
        return true;
      }
    }

  //c) форма fullstack
  function validateEmail3(email3) {
    const regex= regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email3);
    };
    function validateForm3() {
      const name3 = document.getElementById('name3').value;
      const age3 = document.getElementById('age3').value;
      const email3 = document.getElementById('email3').value;
      const phone3 = document.getElementById('phone3').value;
      const address3 = document.getElementById('address3').value;
      const experience3 = document.getElementById('experience3').value;
      const skills3 = document.getElementById('skills3').value;
      const file3 = document.getElementById('file3').value;

      if (name3=="") {
        swal('Opsss !', "Поле имя не может быть пустым.", "error");
        return false;
      }

      else if (name3==name3.toUpperCase()) {
        document.getElementById('name').value = '';
        swal('Opsss !', "Поле имя не может быть В ВЕРХНЕМ РЕГИСТРЕ.", "info");
        return false;
      }

      else if (name3.split(' ').length < 2) {
        swal('О-О-у !', "Нужно полное имя.", "info");
        return false;
      }

      else if (age3=="") {
        swal('Opsss !', "Поле возраст не может быть пустым.", "error");
        return false;
      }

      else if ((age3 < 18) || (age3 > 60) ) {
        document.getElementById('age3').value = '';
        swal('О-О-у !', "Возраст должен быть от 18 до 60 лет.", "info");
        return false;
      }

      else if (email3=="") {
        swal('Opsss !', "Поле email не может быть пустым.", "error");
        return false;
      }

      // else if (!(validateEmail3(email3))) {
      //   document.getElementById('email').value = '';
      //   swal('О-О-у !', "Ваедите действительный email.", "info");
      //   return false;
      // }

      else if (phone3=="") {
        swal('Opsss !', "Поле телефон не может быть пустым.", "error");
        return false;
      }

      else if (address3=="") {
        swal('Opsss !', "Поле адрес не может быть пустым.", "error");
        return false;
      }

      else if (experience3=="") {
        swal('Opsss !', "Поле опыт не может быть пустым.", "error");
        return false;
      }

      else if (skills3=="") {
        swal('Opsss !', "Поле навыки не может быть пустым.", "error");
        return false;
      }

      else if (file3=="") {
        swal('Opsss !', "Файл не может быть пустым.", "error");
        return false;
      }

      else {
        return true;
      }
    }

    //3) Максимальная загрузка размера файла
    $(document).ready(function() {
      $("#file, #file2, #file3").bind('change', function(){
         var a= (this.files[0].size);
         if(a > 2 * 1048576){
           swal('Внимание !', 'Максимальный размер 2mb', 'info');
           this.value="";
         };
      });
    });

    // 4) В имени только буквы
    $(".name").keyup(function() {
      if (!/^[a-zA-Z _]*$/.test(this.value)) {;
          this.value=this.value.split(/[^a-zA-Z _]/).join('');
      };
    });

    //5) Нельзя вводить более двух пробелов
    $(".name").on("keydown", function() {
      var $this= $(this);
          $(this).val($this.val().replace(/(\s{2,})|[^a-zA-Z0-9_']/g, ' ').replace(/^\s*/, ''));
    });

    //6) Нельзя начинать с пробела
    $("input[type='text'], textarea").on("keypress", function(e) {
      if(e.which == 32&& ! this.value.length)
          e.preventDefault();
    });

    // 7) В возрасте только числа
    $('.age').keyup(function() {
      if (!/^[0-9]*$/.test(this.value)) {
        this.value = this.value.split(/[^0-9]/).join('');
      }
    });

    // 8) Eсли возраст больше 60
    $('.age').keyup(function() {
      if ((this.value) > 60) {
        this.value = '';
      }
    });

    // 9) В возрасте не допустим 0
    $('.age').on("input", function() {
      if (/^0/.test(this.value)) {
        this.value = this.value.replace(/^0/, '');
      }
    });

    // 10) Email маленькими буквами
    $(document).ready(function() {
      $('.email').keyup(function() {
        this.value = this.value.toLowerCase();
      });
    })
