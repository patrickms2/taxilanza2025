<?php // todo fix tag

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstadisticasTable extends Migration
{
    public function up()
    {
        Schema::create('estadisticas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('created_by_user')->nullable();
            $table->unsignedBigInteger('updated_by_user')->nullable();
            $table->string

("id_estadistica")->nullable();
            $table->enum
("tipo_estadistica", ["Servicios","Documentos","Otros"],)->nullable();
            $table->timestamp

("fecha")->nullable();
            $table->string

("id_usuario")->nullable();
            $table->string

("id_departamento")->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('estadisticas');
    }
}

