import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(
    private authService: AuthService,
    public loadingController: LoadingController, public toastController: ToastController,
    public router: Router
  ) { }

  async doLogin(form: { value: any; }) {
    const user: string = form.value.username;
    const pass: string = form.value.password;

    const usuario = { username: user, password: pass };

    let loginResponse: boolean;

    this.authService.login(usuario).subscribe((res) => {

      loginResponse = res;

      console.log('Login, resultado: ' + loginResponse);

      if (!loginResponse) {
        this.presentToast();
      } else {
        this.presentLoading();
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Accediendo a la plataforma',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Acceso completado: OK');

    this.router.navigateByUrl('/restricted-home');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Las credenciales suministradas no son válidas.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
