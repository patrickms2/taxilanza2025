<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_usuario")->nullable();
            $table->string

("nombre")->nullable();
            $table->string

("apellidos")->nullable();
            $table->string

("email")->nullable();
            $table->string

("password")->nullable();
            $table->enum
("tipo_usuario", ["Empleado","Taxista","Cliente","Hotel","Admin","Conductor","Central"],)->nullable();
            $table->timestamp

("fecha_registro")->nullable();
            $table->enum
("estado", ["Activo","Inactivo"],)->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}

