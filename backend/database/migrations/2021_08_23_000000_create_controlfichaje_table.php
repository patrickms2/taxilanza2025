<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateControlfichajeTable extends Migration
{
    public function up()
    {
        Schema::create('controlfichaje', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_asistencia")->nullable();
            $table->string

("id_usuario")->nullable();
            $table->string

("id_taxi")->nullable();
            $table->date

("fecha")->nullable();
            $table->string

("hora_inicio")->nullable();
            $table->string

("hora_fin")->nullable();
            $table->integer

("ubicacion_inicio")->nullable();
            $table->integer

("ubicacion_fin")->nullable();
            $table->decimal

("horas_trabajadas")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('controlfichaje');
    }
}

