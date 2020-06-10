<body class="hold-transition register-page">
<div class="register-box">
    <div class="register-box-body">
        <p class="login-box-msg">Register a new membership</p>
        <?php if (isset($validation)): ?>
            <div class="col-12">
                <div class="alert alert-danger" role="alert">
                    <?= $validation->listErrors() ?>
                </div>
            </div>
        <?php endif; ?>
        <form action="/registration" method="post">
            <div class="form-group has-feedback">
                <input type="text" class="form-control" id="name" name="name" placeholder="Full name">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" class="form-control" id="password_confirm" name="password_confirm" placeholder="Retype password">
                <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>
            <div class="row">
                <div class="col-xs-8">
                    <div class="checkbox icheck">
                        <label>
                            <input type="checkbox"> I agree to the <a href="#">terms</a>
                        </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-xs-4">
                    <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
                </div>
                <!-- /.col -->
            </div>
        </form>

        <a href="/">I already have a membership</a>
    </div>
    <!-- /.form-box -->
</div>