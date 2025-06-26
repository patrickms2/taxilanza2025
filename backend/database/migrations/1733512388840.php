<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Migration1733512388840 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

                Schema::create('users', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                Schema::create('carpetas', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('carpetas', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('citas', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('citas', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('conductores', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('conductores', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('consultas', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('consultas', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('controlfichaje', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('controlfichaje', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('controlpermisos', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('controlpermisos', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('departamentos', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('departamentos', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('documentos', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('documentos', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('estadisticas', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('estadisticas', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('localizaciontaxis', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('localizaciontaxis', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('mensajes', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('mensajes', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('pagos', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('pagos', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('roles', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('roles', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('servicios', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('servicios', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('taxis', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('taxis', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('taxistas', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('taxistas', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('tipos_doc', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('tipos_doc', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::create('usuarios', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                    Schema::table('usuarios', function(Blueprint $table) {
                        $table->foreign('created_by_user')->references('id')->on('users');
                        $table->foreign('updated_by_user')->references('id')->on('users');
                    });

                Schema::drop('users');

                Schema::table('users', function (Blueprint $table) {
                    $table->string('firstName')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('lastName')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('phoneNumber')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('email')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->enum('role', ['admin','user'])->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->boolean('disabled')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('password')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->boolean('emailVerified')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('emailVerificationToken')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->timestamp('emailVerificationTokenExpiresAt')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('passwordResetToken')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->timestamp('passwordResetTokenExpiresAt')->nullable();

                });

                Schema::table('users', function (Blueprint $table) {
                    $table->string('provider')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->string('id_doc')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->string('id_user')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->string('id_dep')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->integer('privada')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->string('nombre')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->string('color')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->integer('favorita')->nullable();

                });

                Schema::table('carpetas', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Inactivo'])->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->string('id_cita')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->date('fecha')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->string('hora')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->string('id_departamento')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->integer('lugar')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->string('usuarios')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->string('taxistas')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->enum('estado_cita', ['Pendiente','Confirmada','Cancelada'])->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->string('id_creador')->nullable();

                });

                Schema::table('citas', function (Blueprint $table) {
                    $table->timestamp('f_creacion')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('id_conductor')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('id_taxista')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('nombre')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('apellidos')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('tel')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->date('f_entrada')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->date('f_salida')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('dni')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->date('fecha_nacimiento')->nullable();

                });

                Schema::table('conductores', function (Blueprint $table) {
                    $table->string('licencia_conducir')->nullable();

                });

                Schema::table('consultas', function (Blueprint $table) {
                    $table->string('id_consulta')->nullable();

                });

                Schema::table('consultas', function (Blueprint $table) {
                    $table->timestamp('fecha_consulta')->nullable();

                });

                Schema::table('consultas', function (Blueprint $table) {
                    $table->string('id_taxista')->nullable();

                });

                Schema::table('consultas', function (Blueprint $table) {
                    $table->string('id_departamento')->nullable();

                });

                Schema::table('consultas', function (Blueprint $table) {
                    $table->string('resultado')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->string('id_asistencia')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->string('id_usuario')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->string('id_taxi')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->date('fecha')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->string('hora_inicio')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->string('hora_fin')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->integer('ubicacion_inicio')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->integer('ubicacion_fin')->nullable();

                });

                Schema::table('controlfichaje', function (Blueprint $table) {
                    $table->decimal('horas_trabajadas')->nullable();

                });

                Schema::table('controlpermisos', function (Blueprint $table) {
                    $table->string('id_permiso')->nullable();

                });

                Schema::table('controlpermisos', function (Blueprint $table) {
                    $table->string('id_user')->nullable();

                });

                Schema::table('controlpermisos', function (Blueprint $table) {
                    $table->date('fecha_solicitud')->nullable();

                });

                Schema::table('controlpermisos', function (Blueprint $table) {
                    $table->date('fecha_dia_libre')->nullable();

                });

                Schema::table('controlpermisos', function (Blueprint $table) {
                    $table->enum('estado', ['Pendiente','Aprobado','Rechazado'])->nullable();

                });

                Schema::table('departamentos', function (Blueprint $table) {
                    $table->string('id_departamento')->nullable();

                });

                Schema::table('departamentos', function (Blueprint $table) {
                    $table->string('nombre')->nullable();

                });

                Schema::table('departamentos', function (Blueprint $table) {
                    $table->string('color')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('id_documento')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('user_id')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('category_id')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('nif')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->integer('year')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->integer('mes')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('texto')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('file_name')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->string('file_path')->nullable();

                });

                Schema::table('documentos', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Inactivo'])->nullable();

                });

                Schema::table('estadisticas', function (Blueprint $table) {
                    $table->string('id_estadistica')->nullable();

                });

                Schema::table('estadisticas', function (Blueprint $table) {
                    $table->enum('tipo_estadistica', ['Servicios','Documentos','Otros'])->nullable();

                });

                Schema::table('estadisticas', function (Blueprint $table) {
                    $table->timestamp('fecha')->nullable();

                });

                Schema::table('estadisticas', function (Blueprint $table) {
                    $table->string('id_usuario')->nullable();

                });

                Schema::table('estadisticas', function (Blueprint $table) {
                    $table->string('id_departamento')->nullable();

                });

                Schema::table('localizaciontaxis', function (Blueprint $table) {
                    $table->string('id_localizacion')->nullable();

                });

                Schema::table('localizaciontaxis', function (Blueprint $table) {
                    $table->string('id_taxi')->nullable();

                });

                Schema::table('localizaciontaxis', function (Blueprint $table) {
                    $table->string('latitud')->nullable();

                });

                Schema::table('localizaciontaxis', function (Blueprint $table) {
                    $table->string('longitud')->nullable();

                });

                Schema::table('localizaciontaxis', function (Blueprint $table) {
                    $table->timestamp('ultima_actualizacion')->nullable();

                });

                Schema::table('mensajes', function (Blueprint $table) {
                    $table->string('id_mensaje')->nullable();

                });

                Schema::table('mensajes', function (Blueprint $table) {
                    $table->string('id_departamento')->nullable();

                });

                Schema::table('mensajes', function (Blueprint $table) {
                    $table->string('id_taxista')->nullable();

                });

                Schema::table('mensajes', function (Blueprint $table) {
                    $table->string('contenido')->nullable();

                });

                Schema::table('mensajes', function (Blueprint $table) {
                    $table->timestamp('fecha_envio')->nullable();

                });

                Schema::table('pagos', function (Blueprint $table) {
                    $table->string('id_pago')->nullable();

                });

                Schema::table('pagos', function (Blueprint $table) {
                    $table->string('id_servicio')->nullable();

                });

                Schema::table('pagos', function (Blueprint $table) {
                    $table->decimal('monto')->nullable();

                });

                Schema::table('pagos', function (Blueprint $table) {
                    $table->enum('estado_pago', ['Pagado','Pendiente','Depósito'])->nullable();

                });

                Schema::table('pagos', function (Blueprint $table) {
                    $table->timestamp('fecha_pago')->nullable();

                });

                Schema::table('pagos', function (Blueprint $table) {
                    $table->enum('metodo_pago', ['Tarjeta','Transferencia','Efectivo'])->nullable();

                });

                Schema::table('roles', function (Blueprint $table) {
                    $table->string('id_rol')->nullable();

                });

                Schema::table('roles', function (Blueprint $table) {
                    $table->string('nombre')->nullable();

                });

                Schema::table('roles', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Inactivo'])->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->string('id_servicio')->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->enum('tipo_servicio', ['Recogida Hotel','Reserva con pago'])->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->timestamp('fecha_solicitud')->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->timestamp('fecha_reserva')->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->enum('estado_servicio', ['Pendiente','Confirmado','Cancelado'])->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->string('id_cliente')->nullable();

                });

                Schema::table('servicios', function (Blueprint $table) {
                    $table->string('id_taxista')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('id_taxi')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('id_taxista')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('licencia_taxi')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('tipo')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('preferencias')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('matricula')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('marca')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('modelo')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->integer('año')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->string('color')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Mantenimiento','Baja'])->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->integer('ubicacion_actual')->nullable();

                });

                Schema::table('taxis', function (Blueprint $table) {
                    $table->timestamp('ultima_actualizacion')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('id_taxista')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('id_user')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('licencia_conducir')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('apellidos')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('dni')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->enum('tipo', ['Prop.','Cond.'])->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('direccion')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->string('telefono')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->timestamp('fecha_registro')->nullable();

                });

                Schema::table('taxistas', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Inactivo'])->nullable();

                });

                Schema::table('tipos_doc', function (Blueprint $table) {
                    $table->string('nombre')->nullable();

                });

                Schema::table('tipos_doc', function (Blueprint $table) {
                    $table->string('category_id')->nullable();

                });

                Schema::table('tipos_doc', function (Blueprint $table) {
                    $table->string('color')->nullable();

                });

                Schema::table('tipos_doc', function (Blueprint $table) {
                    $table->string('patron')->nullable();

                });

                Schema::table('tipos_doc', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Inactivo'])->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->string('id_usuario')->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->string('nombre')->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->string('apellidos')->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->string('email')->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->string('password')->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->enum('tipo_usuario', ['Empleado','Taxista','Cliente','Hotel','Admin','Conductor','Central'])->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->timestamp('fecha_registro')->nullable();

                });

                Schema::table('usuarios', function (Blueprint $table) {
                    $table->enum('estado', ['Activo','Inactivo'])->nullable();

                });

    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */
    public function down()
    {

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('fecha_registro');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('tipo_usuario');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('password');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('email');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('apellidos');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('nombre');
                });

                Schema::table('usuarios', function(Blueprint $table) {
                    $table->dropColumn('id_usuario');
                });

                Schema::table('tipos_doc', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('tipos_doc', function(Blueprint $table) {
                    $table->dropColumn('patron');
                });

                Schema::table('tipos_doc', function(Blueprint $table) {
                    $table->dropColumn('color');
                });

                Schema::table('tipos_doc', function(Blueprint $table) {
                    $table->dropColumn('category_id');
                });

                Schema::table('tipos_doc', function(Blueprint $table) {
                    $table->dropColumn('nombre');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('fecha_registro');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('telefono');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('direccion');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('tipo');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('dni');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('apellidos');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('licencia_conducir');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('id_user');
                });

                Schema::table('taxistas', function(Blueprint $table) {
                    $table->dropColumn('id_taxista');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('ultima_actualizacion');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('ubicacion_actual');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('color');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('año');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('modelo');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('marca');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('matricula');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('preferencias');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('tipo');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('licencia_taxi');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('id_taxista');
                });

                Schema::table('taxis', function(Blueprint $table) {
                    $table->dropColumn('id_taxi');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('id_taxista');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('id_cliente');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('estado_servicio');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('fecha_reserva');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('fecha_solicitud');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('tipo_servicio');
                });

                Schema::table('servicios', function(Blueprint $table) {
                    $table->dropColumn('id_servicio');
                });

                Schema::table('roles', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('roles', function(Blueprint $table) {
                    $table->dropColumn('nombre');
                });

                Schema::table('roles', function(Blueprint $table) {
                    $table->dropColumn('id_rol');
                });

                Schema::table('pagos', function(Blueprint $table) {
                    $table->dropColumn('metodo_pago');
                });

                Schema::table('pagos', function(Blueprint $table) {
                    $table->dropColumn('fecha_pago');
                });

                Schema::table('pagos', function(Blueprint $table) {
                    $table->dropColumn('estado_pago');
                });

                Schema::table('pagos', function(Blueprint $table) {
                    $table->dropColumn('monto');
                });

                Schema::table('pagos', function(Blueprint $table) {
                    $table->dropColumn('id_servicio');
                });

                Schema::table('pagos', function(Blueprint $table) {
                    $table->dropColumn('id_pago');
                });

                Schema::table('mensajes', function(Blueprint $table) {
                    $table->dropColumn('fecha_envio');
                });

                Schema::table('mensajes', function(Blueprint $table) {
                    $table->dropColumn('contenido');
                });

                Schema::table('mensajes', function(Blueprint $table) {
                    $table->dropColumn('id_taxista');
                });

                Schema::table('mensajes', function(Blueprint $table) {
                    $table->dropColumn('id_departamento');
                });

                Schema::table('mensajes', function(Blueprint $table) {
                    $table->dropColumn('id_mensaje');
                });

                Schema::table('localizaciontaxis', function(Blueprint $table) {
                    $table->dropColumn('ultima_actualizacion');
                });

                Schema::table('localizaciontaxis', function(Blueprint $table) {
                    $table->dropColumn('longitud');
                });

                Schema::table('localizaciontaxis', function(Blueprint $table) {
                    $table->dropColumn('latitud');
                });

                Schema::table('localizaciontaxis', function(Blueprint $table) {
                    $table->dropColumn('id_taxi');
                });

                Schema::table('localizaciontaxis', function(Blueprint $table) {
                    $table->dropColumn('id_localizacion');
                });

                Schema::table('estadisticas', function(Blueprint $table) {
                    $table->dropColumn('id_departamento');
                });

                Schema::table('estadisticas', function(Blueprint $table) {
                    $table->dropColumn('id_usuario');
                });

                Schema::table('estadisticas', function(Blueprint $table) {
                    $table->dropColumn('fecha');
                });

                Schema::table('estadisticas', function(Blueprint $table) {
                    $table->dropColumn('tipo_estadistica');
                });

                Schema::table('estadisticas', function(Blueprint $table) {
                    $table->dropColumn('id_estadistica');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('file_path');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('file_name');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('texto');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('mes');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('year');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('nif');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('category_id');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('user_id');
                });

                Schema::table('documentos', function(Blueprint $table) {
                    $table->dropColumn('id_documento');
                });

                Schema::table('departamentos', function(Blueprint $table) {
                    $table->dropColumn('color');
                });

                Schema::table('departamentos', function(Blueprint $table) {
                    $table->dropColumn('nombre');
                });

                Schema::table('departamentos', function(Blueprint $table) {
                    $table->dropColumn('id_departamento');
                });

                Schema::table('controlpermisos', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('controlpermisos', function(Blueprint $table) {
                    $table->dropColumn('fecha_dia_libre');
                });

                Schema::table('controlpermisos', function(Blueprint $table) {
                    $table->dropColumn('fecha_solicitud');
                });

                Schema::table('controlpermisos', function(Blueprint $table) {
                    $table->dropColumn('id_user');
                });

                Schema::table('controlpermisos', function(Blueprint $table) {
                    $table->dropColumn('id_permiso');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('horas_trabajadas');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('ubicacion_fin');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('ubicacion_inicio');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('hora_fin');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('hora_inicio');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('fecha');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('id_taxi');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('id_usuario');
                });

                Schema::table('controlfichaje', function(Blueprint $table) {
                    $table->dropColumn('id_asistencia');
                });

                Schema::table('consultas', function(Blueprint $table) {
                    $table->dropColumn('resultado');
                });

                Schema::table('consultas', function(Blueprint $table) {
                    $table->dropColumn('id_departamento');
                });

                Schema::table('consultas', function(Blueprint $table) {
                    $table->dropColumn('id_taxista');
                });

                Schema::table('consultas', function(Blueprint $table) {
                    $table->dropColumn('fecha_consulta');
                });

                Schema::table('consultas', function(Blueprint $table) {
                    $table->dropColumn('id_consulta');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('licencia_conducir');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('fecha_nacimiento');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('dni');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('f_salida');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('f_entrada');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('tel');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('apellidos');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('nombre');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('id_taxista');
                });

                Schema::table('conductores', function(Blueprint $table) {
                    $table->dropColumn('id_conductor');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('f_creacion');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('id_creador');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('estado_cita');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('taxistas');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('usuarios');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('lugar');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('id_departamento');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('hora');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('fecha');
                });

                Schema::table('citas', function(Blueprint $table) {
                    $table->dropColumn('id_cita');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('estado');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('favorita');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('color');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('nombre');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('privada');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('id_dep');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('id_user');
                });

                Schema::table('carpetas', function(Blueprint $table) {
                    $table->dropColumn('id_doc');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('provider');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('passwordResetTokenExpiresAt');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('passwordResetToken');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('emailVerificationTokenExpiresAt');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('emailVerificationToken');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('emailVerified');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('password');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('avatar');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('disabled');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('role');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('email');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('phoneNumber');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('lastName');
                });

                Schema::table('users', function(Blueprint $table) {
                    $table->dropColumn('firstName');
                });

                Schema::create('users', function (Blueprint $table) {
                    $table->id();
                    $table->unsignedBigInteger('created_by_user')->nullable();
                    $table->unsignedBigInteger('updated_by_user')->nullable();
                    $table->timestamps();
                });

                Schema::drop('usuarios');

                Schema::drop('tipos_doc');

                Schema::drop('taxistas');

                Schema::drop('taxis');

                Schema::drop('servicios');

                Schema::drop('roles');

                Schema::drop('pagos');

                Schema::drop('mensajes');

                Schema::drop('localizaciontaxis');

                Schema::drop('estadisticas');

                Schema::drop('documentos');

                Schema::drop('departamentos');

                Schema::drop('controlpermisos');

                Schema::drop('controlfichaje');

                Schema::drop('consultas');

                Schema::drop('conductores');

                Schema::drop('citas');

                Schema::drop('carpetas');

                Schema::drop('users');

    }
}
