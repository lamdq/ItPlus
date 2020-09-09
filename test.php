<!DOCTYPE html>
<html lang="en">
<head>
    <script  type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $name = 'Dinh Quang Lam';
        $mail = 'lamdinhquang@gmail.com';
        $phone = '0366869663';
        $message = 'This is a message';
    ?>
    <div class="container">
        <form action="" method="post" style="background: #F8F9FA;" id="form-sb">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="name">Name*</label>
                    <input type="text" placeholder="<?php echo $name; ?>" class="form-control" id="name">
                </div>
                <div class="form-group col-md-4">
                    <label for="mail">Mail*</label>
                    <input type="text" placeholder="<?php echo $mail; ?>" class="form-control" id="mail">
                </div>
                <div class="form-group col-md-2">
                    <label for="phone">Phone*</label>
                    <input type="text" placeholder="<?php echo $phone; ?>" class="form-control" id="phone">
                </div>
            </div>
            <div class="textarea-message">
                <label for="message">Message</label>
                <textarea id="message" placeholder="<?php echo $message; ?>"></textarea>
            </div>
            <button type="button" class="btn btn-warning">Send Message</button>
            <div class="result"></div>
        </form>
    </div>
    <script  type="text/javascript">
        $(document).ready(function(){
            $('#form-sb').submit(function(){
                var name = $('#name').attr('placeholder');
                var mail = $('#mail').attr('placeholder');
                var phone = $('#phone').attr('placeholder');
                var message = $('#message').attr('placeholder');
                $('#result').html('Name: '+name+'<br/>Mail: '+mail+'<br/>Phone: '+phone+'<br/> Message: '+message);
                event.preventDefault();
            })
        })
    </script>
</body>
</html>