<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\AppointmentsController;
use App\Http\Controllers\Api\AppointmentstaxistasusersController;
use App\Http\Controllers\Api\AppointmentsusersusersController;
use App\Http\Controllers\Api\CooperativadetaxisController;
use App\Http\Controllers\Api\DepartmentsController;
use App\Http\Controllers\Api\DocumentsController;
use App\Http\Controllers\Api\LocationsController;
use App\Http\Controllers\Api\PaymentsController;
use App\Http\Controllers\Api\PermissionsController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\RolespermissionspermissionsController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\Api\TaxisController;
use App\Http\Controllers\Api\TaxisdriversusersController;
use App\Http\Controllers\Api\Userscustom_permissionspermissionsController;
use App\Http\Controllers\Api\FilesController;


use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\CarpetasController;
use App\Http\Controllers\Api\CitasController;
use App\Http\Controllers\Api\ConductoresController;
use App\Http\Controllers\Api\ConsultasController;
use App\Http\Controllers\Api\ControlfichajeController;
use App\Http\Controllers\Api\ControlpermisosController;
use App\Http\Controllers\Api\DepartamentosController;
use App\Http\Controllers\Api\DocumentosController;
use App\Http\Controllers\Api\EstadisticasController;
use App\Http\Controllers\Api\LocalizaciontaxisController;
use App\Http\Controllers\Api\MensajesController;
use App\Http\Controllers\Api\PagosController;
use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\ServiciosController;
use App\Http\Controllers\Api\TaxisController;
use App\Http\Controllers\Api\TaxistasController;
use App\Http\Controllers\Api\Tipos_docController;
use App\Http\Controllers\Api\UsuariosController;
use App\Http\Controllers\Api\FilesController;

Route::get('analytics', fn() => Storage::disk('local')->get('analytics.json'))->middleware('auth:api');

Route::post('file/upload/{table}/{column}', [FilesController::class, 'uploadFile']);
Route::get('file/download', [FilesController::class, 'download']);

Route::get('/email/verify/{id}/{hash}', [UsersController::class, 'verifyEmail'])
    ->middleware(['signed'])->name('verification.verify');

Route::group([
    'middleware' => 'auth:api',
], function() {

    Route::get('users/autocomplete', [UsersController::class, 'findAllAutocomplete']);
    Route::get('users/count', [UsersController::class, 'count']);
    Route::resource('users', UsersController::class);

    Route::get('carpetas/autocomplete', [CarpetasController::class, 'findAllAutocomplete']);
    Route::get('carpetas/count', [CarpetasController::class, 'count']);
    Route::resource('carpetas', CarpetasController::class);

    Route::get('citas/autocomplete', [CitasController::class, 'findAllAutocomplete']);
    Route::get('citas/count', [CitasController::class, 'count']);
    Route::resource('citas', CitasController::class);

    Route::get('conductores/autocomplete', [ConductoresController::class, 'findAllAutocomplete']);
    Route::get('conductores/count', [ConductoresController::class, 'count']);
    Route::resource('conductores', ConductoresController::class);

    Route::get('consultas/autocomplete', [ConsultasController::class, 'findAllAutocomplete']);
    Route::get('consultas/count', [ConsultasController::class, 'count']);
    Route::resource('consultas', ConsultasController::class);

    Route::get('controlfichaje/autocomplete', [ControlfichajeController::class, 'findAllAutocomplete']);
    Route::get('controlfichaje/count', [ControlfichajeController::class, 'count']);
    Route::resource('controlfichaje', ControlfichajeController::class);

    Route::get('controlpermisos/autocomplete', [ControlpermisosController::class, 'findAllAutocomplete']);
    Route::get('controlpermisos/count', [ControlpermisosController::class, 'count']);
    Route::resource('controlpermisos', ControlpermisosController::class);

    Route::get('departamentos/autocomplete', [DepartamentosController::class, 'findAllAutocomplete']);
    Route::get('departamentos/count', [DepartamentosController::class, 'count']);
    Route::resource('departamentos', DepartamentosController::class);

    Route::get('documentos/autocomplete', [DocumentosController::class, 'findAllAutocomplete']);
    Route::get('documentos/count', [DocumentosController::class, 'count']);
    Route::resource('documentos', DocumentosController::class);

    Route::get('estadisticas/autocomplete', [EstadisticasController::class, 'findAllAutocomplete']);
    Route::get('estadisticas/count', [EstadisticasController::class, 'count']);
    Route::resource('estadisticas', EstadisticasController::class);

    Route::get('localizaciontaxis/autocomplete', [LocalizaciontaxisController::class, 'findAllAutocomplete']);
    Route::get('localizaciontaxis/count', [LocalizaciontaxisController::class, 'count']);
    Route::resource('localizaciontaxis', LocalizaciontaxisController::class);

    Route::get('mensajes/autocomplete', [MensajesController::class, 'findAllAutocomplete']);
    Route::get('mensajes/count', [MensajesController::class, 'count']);
    Route::resource('mensajes', MensajesController::class);

    Route::get('pagos/autocomplete', [PagosController::class, 'findAllAutocomplete']);
    Route::get('pagos/count', [PagosController::class, 'count']);
    Route::resource('pagos', PagosController::class);

    Route::get('roles/autocomplete', [RolesController::class, 'findAllAutocomplete']);
    Route::get('roles/count', [RolesController::class, 'count']);
    Route::resource('roles', RolesController::class);

    Route::get('servicios/autocomplete', [ServiciosController::class, 'findAllAutocomplete']);
    Route::get('servicios/count', [ServiciosController::class, 'count']);
    Route::resource('servicios', ServiciosController::class);

    Route::get('taxis/autocomplete', [TaxisController::class, 'findAllAutocomplete']);
    Route::get('taxis/count', [TaxisController::class, 'count']);
    Route::resource('taxis', TaxisController::class);

    Route::get('taxistas/autocomplete', [TaxistasController::class, 'findAllAutocomplete']);
    Route::get('taxistas/count', [TaxistasController::class, 'count']);
    Route::resource('taxistas', TaxistasController::class);

    Route::get('tipos_doc/autocomplete', [Tipos_docController::class, 'findAllAutocomplete']);
    Route::get('tipos_doc/count', [Tipos_docController::class, 'count']);
    Route::resource('tipos_doc', Tipos_docController::class);

    Route::get('usuarios/autocomplete', [UsuariosController::class, 'findAllAutocomplete']);
    Route::get('usuarios/count', [UsuariosController::class, 'count']);
    Route::resource('usuarios', UsuariosController::class);

    Route::get('users/autocomplete', [UsersController::class, 'findAllAutocomplete']);
    Route::get('users/count', [UsersController::class, 'count']);
    Route::resource('users', UsersController::class);

    Route::get('appointments/autocomplete', [AppointmentsController::class, 'findAllAutocomplete']);
    Route::get('appointments/count', [AppointmentsController::class, 'count']);
    Route::resource('appointments', AppointmentsController::class);

    Route::get('appointmentstaxistasusers/autocomplete', [AppointmentstaxistasusersController::class, 'findAllAutocomplete']);
    Route::get('appointmentstaxistasusers/count', [AppointmentstaxistasusersController::class, 'count']);
    Route::resource('appointmentstaxistasusers', AppointmentstaxistasusersController::class);

    Route::get('appointmentsusersusers/autocomplete', [AppointmentsusersusersController::class, 'findAllAutocomplete']);
    Route::get('appointmentsusersusers/count', [AppointmentsusersusersController::class, 'count']);
    Route::resource('appointmentsusersusers', AppointmentsusersusersController::class);

    Route::get('cooperativadetaxis/autocomplete', [CooperativadetaxisController::class, 'findAllAutocomplete']);
    Route::get('cooperativadetaxis/count', [CooperativadetaxisController::class, 'count']);
    Route::resource('cooperativadetaxis', CooperativadetaxisController::class);

    Route::get('departments/autocomplete', [DepartmentsController::class, 'findAllAutocomplete']);
    Route::get('departments/count', [DepartmentsController::class, 'count']);
    Route::resource('departments', DepartmentsController::class);

    Route::get('documents/autocomplete', [DocumentsController::class, 'findAllAutocomplete']);
    Route::get('documents/count', [DocumentsController::class, 'count']);
    Route::resource('documents', DocumentsController::class);

    Route::get('locations/autocomplete', [LocationsController::class, 'findAllAutocomplete']);
    Route::get('locations/count', [LocationsController::class, 'count']);
    Route::resource('locations', LocationsController::class);

    Route::get('payments/autocomplete', [PaymentsController::class, 'findAllAutocomplete']);
    Route::get('payments/count', [PaymentsController::class, 'count']);
    Route::resource('payments', PaymentsController::class);

    Route::get('permissions/autocomplete', [PermissionsController::class, 'findAllAutocomplete']);
    Route::get('permissions/count', [PermissionsController::class, 'count']);
    Route::resource('permissions', PermissionsController::class);

    Route::get('roles/autocomplete', [RolesController::class, 'findAllAutocomplete']);
    Route::get('roles/count', [RolesController::class, 'count']);
    Route::resource('roles', RolesController::class);

    Route::get('rolespermissionspermissions/autocomplete', [RolespermissionspermissionsController::class, 'findAllAutocomplete']);
    Route::get('rolespermissionspermissions/count', [RolespermissionspermissionsController::class, 'count']);
    Route::resource('rolespermissionspermissions', RolespermissionspermissionsController::class);

    Route::get('services/autocomplete', [ServicesController::class, 'findAllAutocomplete']);
    Route::get('services/count', [ServicesController::class, 'count']);
    Route::resource('services', ServicesController::class);

    Route::get('taxis/autocomplete', [TaxisController::class, 'findAllAutocomplete']);
    Route::get('taxis/count', [TaxisController::class, 'count']);
    Route::resource('taxis', TaxisController::class);

    Route::get('taxisdriversusers/autocomplete', [TaxisdriversusersController::class, 'findAllAutocomplete']);
    Route::get('taxisdriversusers/count', [TaxisdriversusersController::class, 'count']);
    Route::resource('taxisdriversusers', TaxisdriversusersController::class);

    Route::get('userscustom_permissionspermissions/autocomplete', [Userscustom_permissionspermissionsController::class, 'findAllAutocomplete']);
    Route::get('userscustom_permissionspermissions/count', [Userscustom_permissionspermissionsController::class, 'count']);
    Route::resource('userscustom_permissionspermissions', Userscustom_permissionspermissionsController::class);

});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::any('signin/local', [AuthController::class, 'login'])->name('login');
    Route::put('verify-email', [UsersController::class, 'sendVerifyEmail']);
    Route::get('me', [AuthController::class, 'me']);
    Route::get('signin/google', [UsersController::class, 'signinGoogle']);
    Route::get('google/callback', [UsersController::class, 'callbackGoogle']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::put('password-update', [AuthController::class, 'passwordUpdate']);
    Route::post('send-password-reset-email', [AuthController::class, 'sendPasswordResetEmail']);
});
Route::get('analytics', fn() => Storage::disk('local')->get('analytics.json'))->middleware('auth:api');

Route::post('file/upload/{table}/{column}', [FilesController::class, 'uploadFile']);
Route::get('file/download', [FilesController::class, 'download']);

Route::get('/email/verify/{id}/{hash}', [UsersController::class, 'verifyEmail'])
    ->middleware(['signed'])->name('verification.verify');


